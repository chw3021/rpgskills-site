export type ReleaseInfo = {
  version: string;
  jarUrl: string;
  loading: boolean;
  /** true when jarUrl is a release asset .jar download URL */
  directJar: boolean;
  /** Minecraft / Spigot API line this JAR targets */
  mcVersion?: string;
  error?: string;
};
