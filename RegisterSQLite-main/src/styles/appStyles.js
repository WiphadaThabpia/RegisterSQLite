import { StyleSheet } from 'react-native'; // นำเข้าโมดูล StyleSheet จาก react-native สำหรับใช้สร้างสไตล์ลิสต์
import { colors, topInset } from './theme'; // นำเข้าอ็อบเจกต์สี (colors) และระยะเว้นขอบบน (topInset) จากไฟล์ theme

export const styles = StyleSheet.create({ // ประกาศและส่งออกสไตล์ลิสต์ชื่อ styles โดยใช้ StyleSheet.create
  container: { flex: 1, backgroundColor: colors.bg }, // สไตล์คอนเทนเนอร์หลัก: ให้ขยายเต็มพื้นที่ (flex: 1) และใส่สีพื้นหลังตามธีม (colors.bg)

  header: { paddingTop: topInset, paddingHorizontal: 20, paddingBottom: 12 }, // สไตล์ส่วนหัว: เว้นระยะด้านบนตามรอยบาก (topInset), ซ้าย-ขวา 20px, ด้านล่าง 12px
  title: { color: colors.text, fontSize: 24, fontWeight: '800' }, // สไตล์หัวข้อ: สีข้อความตามธีม, ขนาดอักษร 24px, ตัวหนามาก (800)

  tabs: { // สไตล์กล่องรวมแท็บ (Tabs Container)
    flexDirection: 'row', // จัดเรียงแท็บย่อยข้างในให้อยู่แถวแนวนอน
    gap: 8, // เว้นระยะห่างระหว่างแต่ละแท็บ 8px
    paddingHorizontal: 20, // เว้นระยะขอบซ้าย-ขวา 20px
    paddingBottom: 12, // เว้นระยะขอบล่าง 12px
    borderBottomWidth: 1, // ความหนาของเส้นขอบล่าง 1px
    borderBottomColor: colors.border, // กำหนดสีเส้นขอบล่างตามธีม (colors.border)
  }, // ปิดสไตล์ tabs
  tab: { // สไตล์ของแต่ละปุ่มแท็บ (สถานะปกติ)
    paddingHorizontal: 14, // เว้นระยะภายในแท็บซ้าย-ขวา 14px
    paddingVertical: 8, // เว้นระยะภายในแท็บบน-ล่าง 8px
    borderRadius: 999, // ปรับขอบให้มนสุดๆ เป็นทรงแคปซูล
    borderWidth: 1, // ความหนาเส้นขอบ 1px
    borderColor: colors.border, // สีเส้นขอบตามธีม
    backgroundColor: colors.card, // สีพื้นหลังปุ่มแท็บตามธีม card
  }, // ปิดสไตล์ tab
  tabActive: { // สไตล์เสริมสำหรับปุ่มแท็บที่กำลังถูกเลือกใช้งาน (Active)
    borderColor: colors.cyan, // เปลี่ยนสีเส้นขอบเป็นสีฟ้า cyan
    backgroundColor: 'rgba(97, 218, 251, 0.14)', // เปลี่ยนสีพื้นหลังเป็นสีฟ้าโปร่งแสง (จางๆ 14%)
  }, // ปิดสไตล์ tabActive
  tabText: { color: colors.dim, fontSize: 14 }, // สไตล์ตัวอักษรบนแท็บปกติ: ใช้สีโทนจาง (colors.dim), ขนาด 14px
  tabTextActive: { color: colors.cyan, fontWeight: '700' }, // สไตล์ตัวอักษรบนแท็บที่ถูกเลือก: ใช้สีฟ้า cyan, ตัวหนา (700)
}); // ปิดคำสั่ง StyleSheet.create