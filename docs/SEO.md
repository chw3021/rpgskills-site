# SEO 운영 메모

이 문서는 사이트의 검색 노출 구조와, 저장소 밖에서 직접 하셔야 하는 작업(Search Console, 외부 배포 페이지)을 정리한 것입니다.

## 1. 현재 구조

- 라우팅: `BrowserRouter` (`basename="/rpgskills-site"`). 예전 `#/경로` 링크는 브라우저에서 새 경로로 주소만 바꿉니다. HTTP 301 리다이렉트가 아니며, 검색엔진에는 새 URL만 노출됩니다.
- 정적 HTML: 빌드 시 `scripts/prerender.mjs`가 콘텐츠 페이지마다 `dist/<경로>/index.html`을 만듭니다. JavaScript 실행 전에도 본문, `<title>`, description, canonical, Open Graph가 들어 있습니다.
- 메타데이터 단일 출처: `src/seo/pageMeta.ts`. 새 페이지를 추가할 때는 여기와 `src/routes/index.tsx`를 함께 수정합니다.
- 언어: 정적 HTML과 메타데이터는 영어(`lang="en"`)입니다. 한국어는 같은 URL에서 언어 버튼이나 접속 지역에 따라 화면에서만 전환됩니다. 언어별 URL이 없으므로 `hreflang`은 쓰지 않습니다. 한국어 전용 URL이 필요해지면 `/ko/...` 경로와 `hreflang`을 함께 추가해야 합니다.
- 커뮤니티 글(`/community/free/<id>` 등): Firebase에서 런타임에 불러오므로 사전 렌더링하지 않습니다. GitHub Pages가 `404.html`(noindex)을 내려주고, 같은 앱이 해당 글을 그립니다. 따라서 HTTP 상태 코드는 404이며 검색 색인 대상이 아닙니다.
- sitemap: `https://chw3021.github.io/rpgskills-site/sitemap.xml`. 빌드가 라우트 정의에서 자동 생성하며, canonical과 같은 절대 URL만 넣습니다. 빌드 시각은 실제 수정일이 아니므로 `lastmod`는 넣지 않습니다.

## 2. robots.txt 한계

- 크롤러는 호스트 루트의 `https://chw3021.github.io/robots.txt`만 읽습니다. `/rpgskills-site/robots.txt`는 robots.txt로 인정되지 않으므로 만들지 않았습니다.
- 확인 시점 기준 `https://chw3021.github.io/robots.txt`는 404입니다. robots.txt가 없으면 전체 크롤링 허용으로 취급되므로 색인에 방해가 되지는 않습니다.
- 루트 robots.txt에 sitemap 위치를 적고 싶으시면 `chw3021/chw3021.github.io` 이름의 사용자 사이트 저장소를 만들고, 그 저장소 루트에 아래 내용을 넣으셔야 합니다. 이 저장소에서는 할 수 없습니다.

```
User-agent: *
Allow: /
Sitemap: https://chw3021.github.io/rpgskills-site/sitemap.xml
```

## 3. Search Console 체크리스트

아래 항목은 계정 권한이 필요하므로 직접 진행하셔야 합니다.

1. **속성 유형**: `github.io`는 DNS를 관리할 수 없어 도메인 속성을 쓸 수 없습니다. **URL 접두어** 속성으로 `https://chw3021.github.io/rpgskills-site/`를 추가합니다. 끝의 `/`까지 정확히 입력합니다.
2. **소유권 확인 방법**: GitHub Pages에서는 다음 두 가지가 가능합니다.
   - HTML 파일: Google이 준 `googleXXXXXXXX.html` 파일을 이 저장소의 `public/` 폴더에 넣습니다. 배포 후 `https://chw3021.github.io/rpgskills-site/googleXXXXXXXX.html`로 열립니다.
   - HTML 태그: `<meta name="google-site-verification" content="...">`를 `index.html`의 `<head>`에 넣습니다. **`<!--app-head-->` ~ `<!--/app-head-->` 블록 밖**에 넣어야 사전 렌더링 시 덮어써지지 않고 모든 페이지에 들어갑니다.
3. **배치 확인**: 커밋하고 push해 Actions 배포가 끝난 뒤, 브라우저에서 파일 URL이 열리는지, 또는 홈 페이지 소스 보기에서 meta 태그가 보이는지 확인한 다음 Search Console에서 "확인"을 누릅니다.
4. **소유권 유지 확인**: 확인 후에도 파일이나 태그를 지우면 안 됩니다. Google이 주기적으로 다시 확인합니다. 빌드 구조를 바꿀 때도 파일이나 태그가 `dist`에 남는지 확인합니다.
5. **URL 검사**: 상단 검색창에 `https://chw3021.github.io/rpgskills-site/`와 `.../installation/`, `.../classes/`, `.../skills/`를 차례로 넣어 검사합니다.
6. **실제 URL 테스트**: URL 검사 화면의 "실제 URL 테스트"를 실행하고, "테스트한 페이지 보기"에서 HTML에 본문 텍스트와 `<title>`이 들어 있는지 확인합니다.
7. **canonical과 noindex 확인**: 검사 결과에서 "사용자가 선언한 표준 URL"이 검사한 URL과 같은지, "색인 생성 허용 여부"가 "예"인지 확인합니다. `404.html`과 커뮤니티 글 URL은 의도적으로 noindex입니다.
8. **사이트맵 제출**: 왼쪽 메뉴 "Sitemaps"에서 `sitemap.xml`을 입력해 제출합니다. 전체 주소는 `https://chw3021.github.io/rpgskills-site/sitemap.xml`입니다. 상태가 "성공"이고 발견된 URL 수가 빌드 로그의 sitemap URL 수와 같은지 확인합니다.
9. **색인 생성 요청**: 홈, 설치, 직업, 스킬 페이지는 URL 검사 화면에서 "색인 생성 요청"을 누릅니다. 하루 요청 수가 제한되므로 주요 페이지만 요청하시고, 나머지는 sitemap으로 발견되도록 둡니다. 요청한다고 색인이나 순위가 보장되지는 않습니다.
10. **실적 보고서**: 며칠에서 몇 주 뒤 "실적" 보고서에서 검색어(`rpgskills`, `minecraft rpg plugin` 등), 페이지별 노출수와 클릭수를 확인합니다. 데이터가 쌓이기 전까지는 비어 있을 수 있습니다.

## 4. 외부 배포 페이지용 영어 소개 문안

Spigot, CurseForge, Modrinth 페이지는 각 사이트 계정으로 직접 수정하셔야 합니다. 아래 문안은 이 사이트에 있는 사실만 사용했습니다. 붙여 넣기 전에 버전 표기가 최신인지 확인해 주세요.

### 한 줄 소개 (tagline)

```
Free Minecraft RPG plugin with 32 classes, skill trees, custom monsters, quests, boss raids and parties.
```

### 짧은 소개 (summary)

```
RPGSkills turns a Paper or Spigot server into an RPG adventure. Players pick one of 32 classes
(8 archetypes × 4 roles), level up proficiency to unlock limit breaks and new skills, and fight
custom monsters, field bosses and boss raids alone or in a party. No other plugins are required.
```

### 본문 (long description)

```
RPGSkills — Minecraft RPG Plugin with Classes and Skills

RPGSkills is a free RPG plugin for Paper and Spigot servers (Minecraft 26.2 and 26.1.2,
one JAR per version) running on Java 21. It needs no other plugins.

How to play
- Open the class menu with /rpg class and choose one of 32 classes across 8 archetypes
  and 4 roles (assault, nuker, suppressor, supporter).
- Use skills with vanilla controls such as Sneak + right-click or Jump + left-click.
  /rpg skill shows your class skills and their inputs.
- Raise proficiency to reach the 1st and 2nd limit break, which unlock follow-up attacks,
  passives and ultimates.
- Hunt custom monsters, field bosses and boss raids, take quests, and team up with /party create and /party join.

Install
1. Download the JAR that matches your server: RPGskills-26.2.jar or RPGskills-26.1.2.jar.
2. Put it in the plugins folder and restart. Config is created in plugins/RPGskills/.
3. Optional: apply the resource pack (Beta) for custom weapon, armor and monster textures.

Documentation
- Website: https://chw3021.github.io/rpgskills-site/
- Installation guide: https://chw3021.github.io/rpgskills-site/installation/
- Classes: https://chw3021.github.io/rpgskills-site/classes/
- Skills: https://chw3021.github.io/rpgskills-site/skills/
- Download: https://chw3021.github.io/rpgskills-site/download/
- Commands and FAQ: https://chw3021.github.io/rpgskills-site/support/

Updates and support
- Releases: https://github.com/chw3021/rpgskills-releases/releases
- Bug reports: https://github.com/chw3021/rpgskills-releases/issues
```

Spigot용 BBCode 본문은 `docs/SPIGOT_RESOURCE.md`에 있으며, 이번에 링크를 모두 새 경로(`#/` 없음)로 바꿨습니다.
