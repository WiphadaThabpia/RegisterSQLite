import { StyleSheet } from 'react-native'; // นำเข้าโมดูล StyleSheet จาก react-native สำหรับใช้สร้างอ็อบเจกต์สไตล์ลิสต์
import { colors } from './theme'; // นำเข้าอ็อบเจกต์สี (colors) จากไฟล์ theme เพื่อดึงโทนสีของแอปมาใช้งาน

export const styles = StyleSheet.create({ // ประกาศและส่งออกสไตล์ลิสต์ชื่อ styles โดยใช้ StyleSheet.create
  content: { padding: 20, paddingBottom: 40 }, // สไตล์คอนเทนเนอร์เนื้อหาหลัก: เว้นระยะขอบรอบทิศทาง 20px และเว้นขอบล่างพิเศษ 40px
  intro: { color: colors.dim, fontSize: 14, marginBottom: 18 }, // สไตล์ข้อความเกริ่นนำ/คำแนะนำหัวหน้า: ใช้สีโทนจาง, ขนาด 14px, เว้นระยะด้านล่าง 18px

  field: { marginBottom: 14 }, // สไตล์ระยะห่างของแต่ละช่องกรอกข้อมูล (Field): เว้นระยะห่างด้านล่าง 14px
  label: { color: colors.text, fontSize: 14, marginBottom: 6 }, // สไตล์ข้อความกำกับช่องกรอก (Label): ใช้สีข้อความหลัก, ขนาด 14px, เว้นระยะล่าง 6px
  input: { // สไตล์หลักสำหรับช่องกรอกข้อมูล (TextInput)
    backgroundColor: colors.card, // สีพื้นหลังช่องกรอกตามธีม card
    borderWidth: 1, // ความหนาของเส้นขอบ 1px
    borderColor: colors.border, // สีเส้นขอบตามธีม border
    borderRadius: 10, // ความมนของมุมขอบ 10px
    paddingHorizontal: 12, // เว้นระยะห่างขอบด้านใน ซ้าย-ขวา ข้างละ 12px
    paddingVertical: 11, // เว้นระยะห่างขอบด้านใน บน-ล่าง ข้างละ 11px
    color: colors.text, // สีตัวอักษรขณะพิมพ์ตามธีม text
    fontSize: 15, // ขนาดตัวอักษรที่พิมพ์ 15px
  }, // ปิดสไตล์ input
  inputError: { borderColor: colors.red }, // สไตล์เสริมเมื่อมี error: เปลี่ยนสีเส้นขอบช่องกรอกเป็นสีแดง
  errorText: { color: colors.red, fontSize: 12, marginTop: 5 }, // สไตล์ข้อความแจ้งเตือน error: ตัวหนังสือสีแดง, ขนาด 12px, เว้นระยะห่างด้านบน 5px
  hintText: { color: colors.dim, fontSize: 12, marginTop: 5 }, // สไตล์ข้อความคำแนะนำ (Hint): ตัวหนังสือสีจาง, ขนาด 12px, เว้นระยะห่างด้านบน 5px

  row: { flexDirection: 'row', gap: 10 }, // สไตล์จัดกลุ่มแถวแนวนอน: จัดเรียงคอมโพเนนต์ลูกในแนวนอน โดยเว้นระยะห่างระหว่างกัน (gap) 10px
  half: { flex: 1 }, // สไตล์แบ่งพื้นที่ครึ่งหนึ่ง: ขยายสัดส่วนให้แบ่งพื้นที่อย่างเท่าๆ กันในแถว (flex: 1)

  submit: { // สไตล์ปุ่มกดลงทะเบียน (Submit Button)
    backgroundColor: colors.cyan, // สีพื้นหลังปุ่มเป็นสีฟ้า cyan
    borderRadius: 10, // ความมนของมุมปุ่ม 10px
    paddingVertical: 14, // เว้นระยะห่างเนื้อหาภายในปุ่ม บน-ล่าง ข้างละ 14px
    alignItems: 'center', // จัดข้อความให้อยู่ตรงกลางปุ่มในแนวนอน
    marginTop: 8, // เว้นระยะห่างจากส่วนบน 8px
  }, // ปิดสไตล์ submit
  submitDisabled: { backgroundColor: colors.border }, // สไตล์เสริมเมื่อปุ่มถูกปิดการใช้งาน (Disabled): เปลี่ยนสีพื้นหลังเป็นสีเทา/สีขอบ border
  submitText: { color: colors.bg, fontSize: 16, fontWeight: '800' }, // สไตล์ตัวอักษรบนปุ่ม: ใช้สีตัวอักษรเป็นสีพื้นหลังหลัก (เพื่อคอนทราสต์กับสีปุ่ม), ขนาด 16px, ตัวหนามาก (800)

  notice: { // สไตล์กล่องแจ้งเตือนความสำเร็จ/กล่องข้อความพิเศษ (Notice Banner)
    backgroundColor: colors.card, // สีพื้นหลังกล่องตามธีม card
    borderLeftWidth: 3, // ความหนาของเส้นขอบฝั่งซ้าย 3px
    borderLeftColor: colors.green, // กำหนดสีเส้นขอบฝั่งซ้ายเป็นสีเขียว
    borderRadius: 8, // ความมนของมุมกล่อง 8px
    padding: 12, // เว้นระยะห่างเนื้อหาภายในกล่องรอบทิศทาง 12px
    marginBottom: 16, // เว้นระยะห่างด้านล่างกล่อง 16px
  }, // ปิดสไตล์ notice
  noticeText: { color: colors.green, fontSize: 14 }, // สไตล์ข้อความภายในกล่องแจ้งเตือน: ใช้สีตัวหนังสือเป็นสีเขียว, ขนาด 14px
}); // ปิดคำสั่ง StyleSheet.create