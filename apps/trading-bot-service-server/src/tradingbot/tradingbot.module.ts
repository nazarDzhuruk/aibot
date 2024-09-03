import { Module } from "@nestjs/common";
import { TradingBotService } from "./tradingbot.service";
import { TradingBotController } from "./tradingbot.controller";
import { TradingBotResolver } from "./tradingbot.resolver";

@Module({
  controllers: [TradingBotController],
  providers: [TradingBotService, TradingBotResolver],
  exports: [TradingBotService],
})
export class TradingBotModule {}
