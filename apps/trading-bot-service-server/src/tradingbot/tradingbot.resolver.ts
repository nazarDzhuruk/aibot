import * as graphql from "@nestjs/graphql";
import { TradingBotService } from "./tradingbot.service";

export class TradingBotResolver {
  constructor(protected readonly service: TradingBotService) {}
}
