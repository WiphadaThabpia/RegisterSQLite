import {View , Text, TextInput} from 'react-native' // ดึงคอมโพเนนต์พื้นฐาน (View, Text, TextInput) จากไลบรารี react-native มาใช้งาน

import {styles} from '../styles/fieldStyles' // นำเข้าสไตล์ลิสต์ (styles) มาจากไฟล์ fieldStyles เพื่อใช้แต่งหน้าตาคอมโพเนนต์
import{colors} from '../styles/theme' // นำเข้าค่าสี (colors) มาจากไฟล์ theme เพื่อใช้จัดการเรื่องโทนสีของแอป

 export default function Field({label,style, error ,hint // ประกาศและส่งออกฟังก์ชันคอมโพเนนต์ชื่อ Field พร้อมดึงพร็อพ (Props) label, style, error, hint
,...inputProps}){ // รับพร็อพที่เหลือทั้งหมดแล้วรวบไว้ในอ็อบเจกต์ชื่อ inputProps (เช่น value, onChangeText, placeholder)
 return( // คืนค่า JSX เพื่อนำไปแสดงผลบนหน้าจอ
    <View style={[styles.container, style ]}> // กล่องข้อความหลัก นำสไตล์พื้นฐาน (styles.container) มาต่อรวมกับสไตล์พิเศษที่รับเข้ามา (style)
        <Text style ={styles.label}>{label}</Text> // แสดงข้อความกำกับช่องกรอกข้อมูล (Label) โดยใช้สไตล์จาก styles.label
        <TextInput // ช่องสำหรับกรอกข้อความ
        style={[styles.input, error && styles.inputError]} // นำสไตล์หลัก (styles.input) มาใช้ และถ้ามี error จะใส่สไตล์ error เพิ่ม (styles.inputError)
        placeholderTextColor={colors.dim} // กำหนดสีของข้อความตัวอย่าง (Placeholder) โดยใช้สี dim จาก colors
        {...inputProps} // กระจายพร็อพที่เหลือทั้งหมด (เช่น value, onChangeText) ส่งต่อไปให้ TextInput
        />
        {error ? ( // ตรวจสอบเงื่อนไข: ถ้ามีข้อความ error ส่งเข้ามา ให้ทำในวงเล็บนี้
            <Text style={styles.errorText}>{error}</Text> // แสดงข้อความแจ้งเตือนความผิดพลาด (Error Text) พร้อมใส่สไตล์ styles.errorText
        ): hint ? ( // ถ้าไม่มี error แต่มีข้อความคำแนะนำ (hint) ส่งเข้ามา ให้ทำในวงเล็บนี้
            <Text style ={styles.hintText}>{hint}</Text> // แสดงข้อความคำแนะนำ (Hint Text) พร้อมใส่สไตล์ styles.hintText
        ) : null} // ถ้าไม่มีทั้ง error และ hint ให้คืนค่า null (ไม่แสดงผลอะไรเลย)
    </View> // ปิดแท็กกล่องข้อความหลัก
 ) // ปิดคำสั่ง return
} // ปิดฟังก์ชัน Field

 //const Field = () =>{} // (ถูกคอมเมนต์ไว้) รูปแบบการเขียนฟังก์ชันด้วย Arrow Function
 //export default Field // (ถูกคอมเมนต์ไว้) รูปแบบการส่งออกคอมโพเนนต์แยกอีกแบบหนึ่ง