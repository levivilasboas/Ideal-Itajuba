import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { SQLitePorter } from '@awesome-cordova-plugins/sqlite-porter/ngx';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  db: SQLiteObject;
  databaseName: string = 'contatos.db';

  constructor(private sqlite: SQLite, private sqlitePorter: SQLitePorter) { }

  async openDatabase() {
    try {
      this.db = await this.sqlite.create({ name: this.databaseName, location: 'default' });
      await this.createDatabase();
    } catch (error) {
      console.error('Ocorreu um erro ao criar o banco de dados', error);
    }
    
    
  }

  async createDatabase() {
    const sqlCreateDatabase = this.getCreateTable();
    const result = await this.sqlitePorter.importSqlToDb(this.db, sqlCreateDatabase);
    return result ? true : false;
    
    
  }

  getCreateTable() {
    const sqls = [];
    sqls.push('CREATE TABLE IF NOT EXISTS contacts (id integer primary key AUTOINCREMENT, name varchar(100), email varchar(30), senha varchar(15), cpf integer (11), telefone integer (11) );');
    return sqls.join('\n');
    
    
  }

  executeSQL(sql: string, params?: any[]) {
    return this.db.executeSql(sql, params);
  }
  
  
}