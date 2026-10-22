import { StatusBar, Text, View } from 'react-native'; // นำเข้าคอมโพเนนต์ StatusBar, Text และ View จากไลบรารี react-native
import { SQLiteProvider } from 'expo-sqlite'; // นำเข้า SQLiteProvider จาก expo-sqlite เพื่อเปิดใช้งานและแชร์ Context ฐานข้อมูลให้ทั้งแอป

import { DATABASE_NAME,initDb } from './src/db/database'; // นำเข้าค่าคงที่ชื่อฐานข้อมูล (DATABASE_NAME) และฟังก์ชันสร้างตาราง (initDb)
import { colors } from './src/styles/theme'; // นำเข้าอ็อบเจกต์สี (colors) จากไฟล์ theme เพื่อใช้กำหนดสีแถบสถานะ (StatusBar)
import RegisterScreen from './src/screens/RegisterScreen'; // นำเข้าคอมโพเนนต์หน้าจอลงทะเบียน (RegisterScreen) มาใช้งาน
import { styles } from './src/styles/appStyles'; // นำเข้าสไตล์ลิสต์ (styles) สำหรับจัดโครงสร้างหลักของหน้า App


export default function App() { // ประกาศและส่งออกฟังก์ชัน App เป็นคอมโพเนนต์หลักของแอปพลิเคชัน
  return ( // คืนค่า JSX เพื่อนำไปแสดงผลบนหน้าจอ
    <> // ใช้ React Fragment เพื่อรวมหลายคอมโพเนนต์ไว้ด้วยกันโดยไม่ต้องสร้าง View ครอบส่วนเกิน
     <StatusBar barStyle ='light-content' backgroundColor={colors.bg}/> // กำหนดตัวอักษรแถบสถานะเป็นสีสว่าง (light-content) และตั้งสีพื้นหลังแถบตามธีม
    <SQLiteProvider databaseName={DATABASE_NAME} onInit={initDb}> // ตัวจัดการฐานข้อมูล SQLite ครอบแอปไว้ พร้อมระบุชื่อไฟล์ DB และเรียก initDb เมื่อเริ่มต้น
  <View style={styles.container}> // กล่องคอนเทนเนอร์หลักครอบเนื้อหาทั้งหน้าตามสไตล์ styles.container
    <View style={styles.header}> // กล่องสำหรับจัดวางส่วนหัวของแอปตามสไตล์ styles.header
      <Text style={styles.title}>ระบบลงทะเบียนนิสิต</Text> // แสดงข้อความหัวข้อเรื่อง "ระบบลงทะเบียนนิสิต"
    </View> // ปิดแท็กกล่องส่วนหัว
    <RegisterScreen /> // ดึงหน้าจอแบบฟอร์มลงทะเบียนนิสิตมาแสดงผล
  </View> // ปิดแท็กกล่องคอนเทนเนอร์หลัก
</SQLiteProvider> // ปิดแท็กตัวจัดการฐานข้อมูล SQLiteProvider
    </> // ปิดแท็ก React Fragment
  ); // ปิดคำสั่ง return
} // ปิดฟังก์ชัน App