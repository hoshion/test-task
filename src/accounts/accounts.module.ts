import {MiddlewareConsumer, Module, NestModule} from "@nestjs/common";
import {AuthMiddleware} from "../middlewares/auth.middleware";

@Module({
  providers: [],
  controllers: [],
})
export class AccountsModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
        .apply(AuthMiddleware)
        .forRoutes('accounts');
  }
}