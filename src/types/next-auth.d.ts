import { type AccountType } from '@/graphql/client/gql/schema';
import { type DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user?: {
      id: string;
      image?: string;
      name: string;
      email: string;
      accountType: AccountType;
      oAuthClient:
        | ({
            id: string;
          } & Record<string, any>)
        | null;
    };
  }
}
