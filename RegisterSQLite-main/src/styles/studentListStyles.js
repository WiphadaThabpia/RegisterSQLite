import { StyleSheet } from 'react-native'; // นำเข้าโมดูล StyleSheet จาก react-native สำหรับใช้สร้างอ็อบเจกต์สไตล์ลิสต์
import { colors } from './theme'; // นำเข้าอ็อบเจกต์สี (colors) จากไฟล์ theme เพื่อใช้คุมโทนสีของแอป

export const styles = StyleSheet.create({ // ประกาศและส่งออกสไตล์ลิสต์ชื่อ styles โดยใช้ StyleSheet.create
  content: { padding: 20, paddingBottom: 40 }, // สไตล์คอนเทนเนอร์เนื้อหาหลัก: เว้นระยะขอบรอบทิศทาง 20px และเว้นขอบล่าง 40px
  summary: { color: colors.dim, fontSize: 14, marginBottom: 14 }, // สไตล์ข้อความสรุปจำนวนรายการ (เช่น "รวมทั้งหมด X คน"): ใช้สีโทนจาง, ขนาด 14px, เว้นระยะล่าง 14px

  card: { // สไตล์กล่องการ์ดแสดงข้อมูลแต่ละรายการ
    backgroundColor: colors.card, // สีพื้นหลังของการ์ดตามธีม card
    borderWidth: 1, // ความหนาของเส้นขอบการ์ด 1px
    borderColor: colors.border, // สีเส้นขอบตามธีม border
    borderRadius: 10, // ความมนของมุมการ์ด 10px
    padding: 14, // เว้นระยะห่างเนื้อหาภายในกล่องการ์ดรอบทิศทาง 14px
    marginBottom: 10, // เว้นระยะห่างระหว่างการ์ดแต่ละใบด้านล่าง 10px
  }, // ปิดสไตล์ card
  cardName: { color: colors.text, fontSize: 16, fontWeight: '700' }, // สไตล์ชื่อ-นามสกุลบนการ์ด: ใช้สีข้อความหลัก, ขนาด 16px, ตัวหนา (700)
  cardLine: { color: colors.dim, fontSize: 13, marginTop: 3 }, // สไตล์ข้อความบรรทัดย่อย (เช่น รหัสนิสิต/ชื่อผู้ใช้): ใช้สีโทนจาง, ขนาด 13px, เว้นระยะห่างด้านบน 3px
  hashLabel: { color: colors.dim, fontSize: 12, marginTop: 8 }, // สไตล์หัวข้อรหัส Hash (เช่น "Password Hash:"): ใช้สีโทนจาง, ขนาด 12px, เว้นระยะห่างด้านบน 8px
  hashValue: { color: colors.cyan, fontSize: 12 }, // สไตล์ข้อความรหัส Hash ที่ถูกเข้ารหัสแล้ว: เน้นด้วยสีฟ้า cyan, ขนาด 12px

  empty: { color: colors.dim, textAlign: 'center', marginTop: 40, fontSize: 15 }, // สไตล์ข้อความเมื่อไม่มีข้อมูล (Empty State): ใช้สีโทนจาง, จัดข้อความให้อยู่ตรงกลาง, เว้นขอบบน 40px, ขนาด 15px

  clearButton: { // สไตล์ปุ่มลบข้อมูลทั้งหมด/ล้างข้อมูล (Clear Button)
    borderWidth: 1, // ความหนาของเส้นขอบปุ่ม 1px
    borderColor: colors.red, // เส้นขอบปุ่มใช้สีแดงเพื่อเตือนการลบ
    borderRadius: 10, // ความมนของมุมปุ่ม 10px
    paddingVertical: 12, // เว้นระยะห่างเนื้อหาภายในปุ่ม บน-ล่าง ข้างละ 12px
    alignItems: 'center', // จัดข้อความให้อยู่ตรงกลางปุ่มในแนวนอน
    marginTop: 10, // เว้นระยะห่างจากส่วนบน 10px
  }, // ปิดสไตล์ clearButton
  clearText: { color: colors.red, fontSize: 15, fontWeight: '600' }, // สไตล์ตัวอักษรบนปุ่มลบ: ใช้สีตัวหนังสือเป็นสีแดง, ขนาด 15px, ตัวหนากลางๆ (600)
}); // ปิดคำสั่ง StyleSheet.create
