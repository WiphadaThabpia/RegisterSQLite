import * as Crypto from 'expo-crypto' // นำเข้าโมดูล expo-crypto เพื่อใช้สำหรับการสร้างค่าแบบสุ่มหรือการเข้ารหัสความปลอดภัย (เช่น Salt/Hash)

export const DATABASE_NAME = 'register_db.db' // ประกาศและส่งออกค่าคงที่ DATABASE_NAME เป็นชื่อไฟล์ฐานข้อมูล SQLite

export async function initDb(db) { // ประกาศและส่งออกฟังก์ชันแบบ Async ชื่อ initDb รับพารามิเตอร์ db (ตัวเชื่อมต่อฐานข้อมูล)
    await db.execAsync(` // รอการประมวลผลคำสั่ง SQL หลายคำสั่งพร้อมกันผ่านฟังก์ชัน execAsync
        PRAGMA journal_mode = WAL; // กำหนดโหมดการบันทึกทรานแซกชันของ SQLite เป็น Write-Ahead Logging (WAL) เพื่อเพิ่มความเร็วในการอ่าน/เขียน

        CREATE TABLE IF NOT EXISTS students( // สร้างตารางชื่อ students ถ้ายังไม่มีตารางนี้อยู่ในฐานข้อมูล
        id              INTEGER PRIMARY KEY AUTOINCREMENT, // คอลัมน์ id เป็นจำนวนเต็ม, เป็น Primary Key และเพิ่มค่าให้อัตโนมัติ (1, 2, 3, ...)
        name            TEXT NOT NULL, // คอลัมน์ name เก็บชื่อประเภทข้อความ ห้ามเป็นค่าว่าง
        surname         TEXT NOT NULL, // คอลัมน์ surname เก็บนามสกุลประเภทข้อความ ห้ามเป็นค่าว่าง
        student_id      TEXT NOT NULL UNIQUE, // คอลัมน์ student_id เก็บรหัสนักศึกษา ห้ามเป็นค่าว่าง และห้ามซ้ำกัน
        username        TEXT NOT NULL UNIQUE, // คอลัมน์ username เก็บชื่อผู้ใช้ ห้ามเป็นค่าว่าง และห้ามซ้ำกัน
        password_salt   TEXT NOT NULL, // คอลัมน์ password_salt เก็บค่า Salt สุ่มเพื่อใช้ถอด/เข้าและสุ่มรหัสผ่าน ห้ามเป็นค่าว่าง
        password_hash   TEXT NOT NULL, // คอลัมน์ password_hash เก็บผลลัพธ์รหัสผ่านที่เข้ารหัสแล้ว ห้ามเป็นค่าว่าง
        created_at      TEXT NOT NULL // คอลัมน์ created_at เก็บวันเวลาที่สร้างบัญชีประเภทข้อความ ห้ามเป็นค่าว่าง
        ); // ปิดการกำหนดคำสั่งโครงสร้างตาราง
        `) // ปิดบล็อกคำสั่ง SQL
} // ปิดฟังก์ชัน initDb
