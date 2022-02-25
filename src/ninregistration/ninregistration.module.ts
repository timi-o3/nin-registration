import { Module } from '@nestjs/common';
import { BiodataModule } from './biodata/biodata.module';

@Module({
  imports: [ BiodataModule]
})
export class NinregistrationModule {}
