import { Injectable } from '@angular/core';
import {SQLiteObject, SQLite} from "@ionic-native/sqlite/ngx";

@Injectable({
  providedIn: 'root'
})
export class DataloadService {
  databaseObj: SQLiteObject;
  row_data: any = [];
  readonly database_name: string = "who_mobil.db";

  constructor(private sqlite: SQLite) {}

  // Create DB if not there
  createDB() {
    this.sqlite.create({
      name: this.database_name,
      location: 'default'
    })
        .then((db: SQLiteObject) => {
          this.databaseObj = db;
          alert('who_mobil.db Database Created!');
          this.createTableDATA();
          this.createTableDATAELEMENT();
          this.createTableINDICATOR();
          this.createTableORGANISATIONUNITE();
        })
        .catch(e => {
          alert("error " + JSON.stringify(e))
        });
  }

  // Create tables
  createTableDATA() {
    this.databaseObj.executeSql(`CREATE TABLE IF NOT EXISTS DATA 
                                (ID_DATA INTEGER PRIMARY KEY AUTOINCREMENT ,
                                 UID_OU varchar(100), UID_DE varchar(100),
                                 UID_IND varchar(100),UID_DATASET varchar(100),
                                 NAME_DATASET varchar(500), PERIOD varchar(10), VALUE_JSON text)`, [])
        .then(() => {
          alert('Table Data Created!');
        })
        .catch(e => {
          alert("error " + JSON.stringify(e))
        });
  }
  createTableDATAELEMENT() {
    this.databaseObj.executeSql(`CREATE TABLE IF NOT EXISTS DATA_ELEMENT 
                                (ID_DE INTEGER PRIMARY KEY AUTOINCREMENT ,
                                 UID_DE varchar(100), NAME_DE varchar(100),
                                 UID_DATASET_DE varchar(100),NAME_DATASET_DE varchar(100),
                                 NUMERATEUR varchar(500), DENOMINATEUR varchar(100))`, [])
        .then(() => {
          alert('Table DATA_ELEMENT Created!');
        })
        .catch(e => {
          alert("error " + JSON.stringify(e))
        });
  }
  createTableINDICATOR() {
    this.databaseObj.executeSql(`CREATE TABLE IF NOT EXISTS INDICATOR 
                                (ID_IND INTEGER PRIMARY KEY AUTOINCREMENT ,
                                 UID_IND varchar(100), NAME_IND varchar(100),
                                 UID_DATASET_IND varchar(100),NAME_DATASET_IND varchar(100),
                                 NUMERATEUR varchar(500), DENOMINATEUR varchar(100))`, [])
        .then(() => {
          alert('Table INDICATOR Created!');
        })
        .catch(e => {
          alert("error " + JSON.stringify(e))
        });
  }
  createTableORGANISATIONUNITE() {
    this.databaseObj.executeSql(`CREATE TABLE IF NOT EXISTS ORGANISATION_UNITE 
                                (ID_OU INTEGER PRIMARY KEY AUTOINCREMENT ,
                                 UID_OU varchar(100), NAME_OU varchar(100),
                                 LEVEL_OU INTEGER,UID_PARENT_OU varchar(100))`, [])
        .then(() => {
          alert('Table ORGANISATION_UNITE Created!');
        })
        .catch(e => {
          alert("error " + JSON.stringify(e))
        });
  }
  //Inset row in the table
  insertOU() {
    this.databaseObj.executeSql(`INSERT INTO ORGANISATION_UNITE (UID_OU,NAME_OU,LEVEL_OU,UID_PARENT_OU) VALUES
                                ('XXXXX','yamoussoukro',2,'U1')`, [])
        .then(() => {
          alert('unit organit Inserted!');
          this.getOU();
        })
        .catch(e => {
          alert("error " + JSON.stringify(e))
        });
  }
  // Retrieve rows from table
  getOU() {
    this.databaseObj.executeSql(`SELECT * FROM ORGANISATION_UNITE`, [])
        .then((res) => {
          this.row_data = [];
          if (res.rows.length > 0) {
            for (var i = 0; i < res.rows.length; i++) {
              this.row_data.push(res.rows.item(i));
            }
          }
        })
        .catch(e => {
          alert("error " + JSON.stringify(e))
        });
  }
  /*/ Delete single row
  deleteRow(item) {
    this.databaseObj.executeSql(`
      DELETE FROM ${this.table_name} WHERE pid = ${item.pid}
    `
        , [])
        .then((res) => {
          alert("Row Deleted!");
          this.getRows();
        })
        .catch(e => {
          alert("error " + JSON.stringify(e))
        });
  }

  updateOU() {
    this.databaseObj.executeSql(`
      UPDATE ${this.ORGANISATION_UNITE}
      SET Name = '${this.name_model}'
      WHERE pid = ${this.to_update_item.pid}
    `, [])
        .then(() => {
          alert('OU Updated!');
          this.updateActive = false;
          this.getRows();
        })
        .catch(e => {
          alert("error " + JSON.stringify(e))
        });
  }*/
}
