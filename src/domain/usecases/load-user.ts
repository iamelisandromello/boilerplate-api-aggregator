export interface LoadUser {
  load: (user: string) => Promise<string | false>
}
