import { Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'
import { ConfigModule } from '@nestjs/config'
import { TaskModule } from './task/task.module'
import { TimeBlockModule } from './time-block/time-block.module'
import { PomodoroModule } from './pomodoro/pomodoro.module'

@Module({
	// to be able to use in providers
	imports: [
		AuthModule,
		UserModule,
		ConfigModule.forRoot(),
		TaskModule,
		TimeBlockModule,
		PomodoroModule
	]
})
export class AppModule {}
