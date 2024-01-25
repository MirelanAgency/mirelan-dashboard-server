import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from "@adonisjs/lucid/orm";
import User from "#models/user";
import type { HasOne } from "@adonisjs/lucid/types/relations";

export default class Token extends BaseModel {
  @column({ isPrimary: true })
  declare id: number;

  @hasOne(() => User, {
    localKey: 'user_id',
    foreignKey: 'id',
  })
  declare user: HasOne<typeof User>;

  @column()
  declare user_id: number;

  @column()
  declare token: string;

  @column()
  declare type: string;

  @column()
  declare is_revoked: boolean;

  @column()
  declare name: string;

  @column.dateTime()
  declare expires_at: DateTime;

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updated_at: DateTime;
}
