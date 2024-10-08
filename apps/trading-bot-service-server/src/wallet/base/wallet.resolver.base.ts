/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Wallet } from "./Wallet";
import { WalletCountArgs } from "./WalletCountArgs";
import { WalletFindManyArgs } from "./WalletFindManyArgs";
import { WalletFindUniqueArgs } from "./WalletFindUniqueArgs";
import { CreateWalletArgs } from "./CreateWalletArgs";
import { UpdateWalletArgs } from "./UpdateWalletArgs";
import { DeleteWalletArgs } from "./DeleteWalletArgs";
import { WalletService } from "../wallet.service";
@graphql.Resolver(() => Wallet)
export class WalletResolverBase {
  constructor(protected readonly service: WalletService) {}

  async _walletsMeta(
    @graphql.Args() args: WalletCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Wallet])
  async wallets(@graphql.Args() args: WalletFindManyArgs): Promise<Wallet[]> {
    return this.service.wallets(args);
  }

  @graphql.Query(() => Wallet, { nullable: true })
  async wallet(
    @graphql.Args() args: WalletFindUniqueArgs
  ): Promise<Wallet | null> {
    const result = await this.service.wallet(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Wallet)
  async createWallet(@graphql.Args() args: CreateWalletArgs): Promise<Wallet> {
    return await this.service.createWallet({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Wallet)
  async updateWallet(
    @graphql.Args() args: UpdateWalletArgs
  ): Promise<Wallet | null> {
    try {
      return await this.service.updateWallet({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Wallet)
  async deleteWallet(
    @graphql.Args() args: DeleteWalletArgs
  ): Promise<Wallet | null> {
    try {
      return await this.service.deleteWallet(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
