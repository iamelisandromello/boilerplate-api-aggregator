export interface LoadNameRepository {
  charge: (user: string) => Promise<string | false>
}
