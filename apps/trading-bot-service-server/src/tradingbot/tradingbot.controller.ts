import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TradingBotService } from "./tradingbot.service";

@swagger.ApiTags("tradingBots")
@common.Controller("tradingBots")
export class TradingBotController {
  constructor(protected readonly service: TradingBotService) {}
}
