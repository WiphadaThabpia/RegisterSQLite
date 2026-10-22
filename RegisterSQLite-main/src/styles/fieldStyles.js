import { StyleSheet } from "react-native"; // นำเข้าโมดูล StyleSheet จาก react-native สำหรับสร้างอ็อบเจกต์สไตล์ลิสต์
import { Color, colors } from "./theme"; // นำเข้า Color และ colors จากไฟล์ theme เพื่อดึงโทนสีมาใช้แต่ง UI

export const styles = StyleSheet.create({ // ประกาศและส่งออกสไตล์ลิสต์ชื่อ styles โดยใช้ StyleSheet.create
    container: {marginbottom: 14}, // สไตล์กล่องหลัก: เว้นระยะห่างด้านล่าง 14px (หมายเหตุ: ควรสระเป็น camelCase -> marginBottom)
    label:{ color:colors.text, fontSize: 14, marginBottom: 6}, // สไตล์หัวข้อช่อง: ใช้สีข้อความหลัก, ขนาด 14px, เว้นระยะล่าง 6px
    input:{ // สไตล์หลักสำหรับช่องกรอกข้อมูล (TextInput)
        backgroundColor: colors.card, // สีพื้นหลังช่องกรอกตามธีม card
        borderWidth: 1, // กำหนดความหนาเส้นขอบ 1px
        borderColor: colors.border, // สีเส้นขอบตามธีม border
        paddingHorizontal:12, // เว้นระยะห่างขอบด้านใน ซ้าย-ขวา ข้างละ 12px
        paddingVertical:11, // เว้นระยะห่างขอบด้านใน บน-ล่าง ข้างละ 11px
        color: colors.text, // สีตัวอักษรขณะพิมพ์ตามธีม text
        fontSize:15 // ขนาดตัวอักษรที่พิมพ์ 15px
    }, // ปิดสไตล์ input
    inputError:{borderColor: colors.red}, // สไตล์เสริมเมื่อมี error: เปลี่ยนสีเส้นขอบช่องกรอกเป็นสีแดง
    errorText:{color:colors.red, fontSize:12, marginTop:5}, // สไตล์ข้อความแจ้งเตือน error: ตัวหนังสือสีแดง, ขนาด 12px, เว้นระยะห่างจากช่องกรอกด้านบน 5px
    hintText:{color:colors.dim , fontSize: 12, marginTop: 5} // สไตล์ข้อความคำแนะนำ (Hint): ตัวหนังสือสีจาง, ขนาด 12px, เว้นระยะห่างด้านบน 5px
    
}) // ปิดคำสั่ง StyleSheet.create