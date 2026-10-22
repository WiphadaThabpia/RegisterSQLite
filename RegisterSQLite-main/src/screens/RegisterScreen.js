import { useState } from 'react' // นำเข้า useState จาก React เพื่อใช้จัดการ State ในคอมโพเนนต์
import {View, // นำเข้า View สำหรับเป็นกล่องจัดเค้าโครงหน้าจอ
    Text , // นำเข้า Text สำหรับแสดงข้อความ
    ScrollView, // นำเข้า ScrollView สำหรับหน้าจอที่สามารถเลื่อน (Scroll) ได้
    Pressable, // นำเข้า Pressable สำหรับทำปุ่มที่สามารถกดได้
     Alert, // นำเข้า Alert สำหรับแสดงกล่องข้อความแจ้งเตือน (Pop-up)
     KeyboardAvoidingView, // นำเข้า KeyboardAvoidingView สำหรับดันหน้าจอขึ้นเมื่อคีย์บอร์ดเด้งบังช่องกรอก
     Platform // นำเข้า Platform เพื่อตรวจสอบว่าแอปกำลังรันบน iOS หรือ Android
    } from 'react-native' // ดึงคอมโพเนนต์ทั้งหมดมาจาก react-native
import { useSQLiteContext } from 'expo-sqlite' // นำเข้า Context ของ SQLite สำหรับเชื่อมต่อและจัดการฐานข้อมูล Expo SQLite
import {hasError, validateForm } from '../utils/validate' // นำเข้าฟังก์ชันตรวจสอบความถูกต้องของฟอร์มจากไฟล์ validate.js
import Field from '../components/Field' // นำเข้าคอมโพเนนต์ Field (ช่องกรอกข้อมูล) ที่สร้างแยกไว้มาใช้งาน
import { styles } from '../styles/registerStyles' // นำเข้าไฟล์สไตล์สำหรับตกแต่งหน้าลงทะเบียน

const EMPTY_FORM ={ // กำหนดค่าเริ่มต้นของฟอร์มลงทะเบียนเป็นอ็อบเจกต์ว่าง
    name:'', // ค่าเริ่มต้นของชื่อ
    surname:'', // ค่าเริ่มต้นของนามสกุล
    studentId:'', // ค่าเริ่มต้นของรหัสนิสิต
    username:'', // ค่าเริ่มต้นของชื่อผู้ใช้
    password:'', // ค่าเริ่มต้นของรหัสผ่าน
    confirm:'' // ค่าเริ่มต้นของการยืนยันรหัสผ่าน
} // ปิดการกำหนดค่าคงที่ EMPTY_FORM

const RegisterScreen = () => { // ประกาศคอมโพเนนต์ฟังก์ชันชื่อ RegisterScreen
   
    const [form, setForm] = useState(EMPTY_FORM) // สร้าง State 'form' สำหรับเก็บข้อมูลที่กรอก โดยมีค่าเริ่มต้นจาก EMPTY_FORM
    const [errors, setErrors] = useState({}) // สร้าง State 'errors' สำหรับเก็บข้อความแจ้งเตือนความผิดพลาดของแต่ละช่องกรอก
    const [saving, setSaving] = useState(false) // สร้าง State 'saving' สถานะการบันทึกข้อมูล (true = กำลังบันทึก)
    const [success, setSuccess] = useState('') // สร้าง State 'success' สำหรับเก็บข้อความเมื่อลงทะเบียนสำเร็จ

    function setField(field , value){ // ประกาศฟังก์ชันอัปเดตข้อมูลในฟอร์มแบบรายช่อง
        setForm((prev) => ({...prev, [field]: value})) // อัปเดตข้อมูลช่องที่ระบุ (field) ใน form โดยคงข้อมูลช่องอื่นไว้เหมือนเดิม
        if(errors[field]){ // ตรวจสอบว่าถ้าช่องที่กำลังพิมพ์เคยมี error อยู่เดิม
            setErrors((prev) => { // สั่งอัปเดตเพื่อลบ error ของช่องนั้นออก
                const next = { ...prev } // ก๊อปปี้อ็อบเจกต์ errors เดิมมาไว้ใน next
                delete next[field] // ลบข้อความ error ของช่องที่ผู้ใช้กำลังแก้ไข
                return next // คืนค่าข้อผิดพลาดใหม่ที่ลบช่องปัจจุบันออกแล้ว
            }) // ปิดฟังก์ชัน setErrors
        } // ปิดเงื่อนไข if
    } // ปิดฟังก์ชัน setField

    const handleSubmit = async () =>{ // ประกาศฟังก์ชันแบบ Async เมื่อผู้ใช้กดปุ่มลงทะเบียน
       setSuccess('') // ล้างข้อความแจ้งเตือนความสำเร็จเดิม (ถ้ามี)
       const found = validateForm(form) // เรียกฟังก์ชัน validateForm เพื่อตรวจสอบข้อมูลทั้งหมดใน form
       if(hasError(found)){ // ถ้าพบข้อผิดพลาดในข้อมูลที่กรอก
        setErrors(found) // นำข้อผิดพลาดที่พบไปเก็บใน State errors เพื่อนำไปแสดงผลแดงใต้ช่องกรอก
        return // ยุติการทำงานของฟังก์ชันทันที (ไม่บันทึกข้อมูล)
       } // ปิดเงื่อนไข if
    } // ปิดฟังก์ชัน handleSubmit
    
return( // คืนค่า JSX เพื่อนำไปแสดงผลเป็นหน้าตา UI
    <KeyboardAvoidingView // ใช้คอมโพเนนต์จัดการปัญหาคีย์บอร์ดบังช่องกรอกข้อมูล
    style ={{flex: 1}} // กำหนดให้ครอบคลุมเต็มพื้นที่หน้าจอ
    behavior={Platform.OS === 'ios' ? 'padding' : undefined} // ถ้าเป็นระบบ iOS ให้ดันหน้าจอขึ้นตามความสูงคีย์บอร์ด (Android ใช้ค่าเริ่มต้น)
    > // ปิดแท็กเปิด KeyboardAvoidingView
        <ScrollView // กล่องเนื้อหาที่เลื่อนขึ้นลงได้
         contentContainerStyle={styles.content} // จัดสไตล์การจัดวางเนื้อหาภายใน ScrollView
         keyboardShouldPersistTaps= 'handled' // อนุญาตให้กดปุ่มภายนอกได้โดยที่คีย์บอร์ดไม่เด้งหุบทันที
        > // ปิดแท็กเปิด ScrollView
            <Text style ={styles.intro}>กรอกข้อมูลให้ครบทุกช่อง</Text> // ข้อความแนะนำส่วนหัวของหน้าฟอร์ม

            <View style={styles.row}> // กล่องจัดแถว horizontal สำหรับวางช่อง "ชื่อ" และ "นามสกุล" คู่กัน
                <Field // เรียกใช้คอมโพเนนต์ช่องกรอกข้อมูล "ชื่อ"
                style={styles.half} // กำหนดสไตล์ความกว้างครึ่งหนึ่งของแถว
                label ="ชื่อ" // ข้อความกำกับหัวช่อง
                placeholder="สมชาย" // ตัวอย่างข้อความในช่อง
                value={form.name} // ผูกค่าเข้ากับ State form.name
                onChangeText={(v) => setField('name', v)} // เมื่อพิมพ์ข้อความ ให้เรียกใช้ฟังก์ชัน setField อัปเดตช่อง 'name'
                error ={errors.name} // ส่งข้อความ error ของชื่อไปแสดงผล (ถ้ามี)
                /> // ปิดแท็ก Field ชื่อ
                <Field // เรียกใช้คอมโพเนนต์ช่องกรอกข้อมูล "นามสกุล"
                style={styles.half} // กำหนดสไตล์ความกว้างครึ่งหนึ่งของแถว
                label="นามสกุล" // ข้อความกำกับหัวช่อง
                placeholder="ใจดี" // ตัวอย่างข้อความในช่อง
                value={form.surname} // ผูกค่าเข้ากับ State form.surname
                onChangeText={(v) => setField('surname', v)} // เมื่อพิมพ์ข้อความ ให้เรียกใช้ฟังก์ชัน setField อัปเดตช่อง 'surname'
                error ={errors.surname} // ส่งข้อความ error ของนามสกุลไปแสดงผล (ถ้ามี)
                /> // ปิดแท็ก Field นามสกุล
            </View> // ปิด View จัดแถวครึ่งหน้าจอ
            <Field // เรียกใช้คอมโพเนนต์ช่องกรอกข้อมูล "รหัสนิสิต"
            label="รหัสนิสิต" // ข้อความกำกับหัวช่อง
            placeholder="6721601234" // ตัวอย่างข้อความในช่อง
            value={form.studentId} // ผูกค่าเข้ากับ State form.studentId
            onChangeText={(v) => setField('studentId', v)} // เมื่อพิมพ์ข้อความ ให้เรียกใช้ฟังก์ชัน setField อัปเดตช่อง 'studentId'
            error ={errors.studentId} // ส่งข้อความ error ของรหัสนิสิตไปแสดงผล (ถ้ามี)
            maxLength={10} // จำกัดจำนวนตัวอักษรไม่เกิน 10 ตัว
            keyboardType="number-pad" // ปรับแป้นพิมพ์ให้แสดงเฉพาะตัวเลข
            /> // ปิดแท็ก Field รหัสนิสิต
            <Field // เรียกใช้คอมโพเนนต์ช่องกรอกข้อมูล "ชื่อผู้ใช้"
            label="ชื่อผู้ใช้" // ข้อความกำกับหัวช่อง
            placeholder="Somchai_J" // ตัวอย่างข้อความในช่อง
             value={form.username} // ผูกค่าเข้ากับ State form.username
            onChangeText={(v) => setField('username', v)} // เมื่อพิมพ์ข้อความ ให้เรียกใช้ฟังก์ชัน setField อัปเดตช่อง 'username'
            error ={errors.username} // ส่งข้อความ error ของชื่อผู้ใช้ไปแสดงผล (ถ้ามี)
            hint = "ใช้สำหรับเข้าสู่ระบบ ห้ามซ้ำกับผู้อื่น" // ข้อความคำแนะนำเพิ่มเติมใต้ช่อง
            autoCapitalize= "none" // ปิดการขึ้นต้นด้วยตัวพิมพ์ใหญ่แมตช์อัตโนมัติ
            maxLength ={20} // จำกัดจำนวนตัวอักษรไม่เกิน 20 ตัว
            /> // ปิดแท็ก Field ชื่อผู้ใช้
            <Field // เรียกใช้คอมโพเนนต์ช่องกรอกข้อมูล "รหัสผ่าน"
            label="รหัสผ่าน" // ข้อความกำกับหัวช่อง
            placeholder="อย่างน้อย 8 ตัวอักษร" // ตัวอย่างข้อความในช่อง
            secureTextEntry // ซ่อนข้อความรหัสผ่านเป็นจุดสีดำ
            autoCapitalize ="none" // ปิดการขึ้นต้นด้วยตัวพิมพ์ใหญ่แมตช์อัตโนมัติ
            value={form.password} // ผูกค่าเข้ากับ State form.password
            onChangeText={(v) => setField('password', v)} // เมื่อพิมพ์ข้อความ ให้เรียกใช้ฟังก์ชัน setField อัปเดตช่อง 'password'
            error ={errors.password} // ส่งข้อความ error ของรหัสผ่านไปแสดงผล (ถ้ามี)
            hint = "อย่างน้อย 8 ตัว ต้องมีทั้งตัวเลขและตัวอักษร" // ข้อความคำแนะนำเพิ่มเติมใต้ช่อง
            /> // ปิดแท็ก Field รหัสผ่าน
             <Field // เรียกใช้คอมโพเนนต์ช่องกรอกข้อมูล "ยืนยันรหัสผ่าน"
            label="ยืนยันรหัสผ่าน" // ข้อความกำกับหัวช่อง
            placeholder="พิมพ์รหัสผ่านอีกครั้ง" // ตัวอย่างข้อความในช่อง
            secureTextEntry // ซ่อนข้อความรหัสผ่านเป็นจุดสีดำ
            autoCapitalize ="none" // ปิดการขึ้นต้นด้วยตัวพิมพ์ใหญ่แมตช์อัตโนมัติ
            value={form.confirm} // ผูกค่าเข้ากับ State form.confirm
            onChangeText={(v) => setField('confirm', v)} // เมื่อพิมพ์ข้อความ ให้เรียกใช้ฟังก์ชัน setField อัปเดตช่อง 'confirm'
            error ={errors.confirm} // ส่งข้อความ error ของการยืนยันรหัสผ่านไปแสดงผล (ถ้ามี)

            /> // ปิดแท็ก Field ยืนยันรหัสผ่าน
            <Pressable style ={[styles.submit, saving && styles.submitDisabled]} // ปุ่มกดส่งฟอร์ม (ถ้าอยู่ในสถานะ saving จะใช้สไตล์ปุ่มปิดใช้งาน)
            onPress={handleSubmit} // เมื่อกดปุ่ม ให้เรียกฟังก์ชัน handleSubmit
            disabled={saving} // ปิดการใช้งานปุ่มกดชั่วคราวหากอยู่ในสถานะกำลังบันทึก (saving = true)
            > // ปิดแท็กเปิด Pressable
                <Text style={styles.submitText}> // ข้อความบนปุ่มกด
                {saving ? 'กำลังบันทึก' : 'ลงทะเบียน'} // ถ้ากำลังบันทึกให้แสดง 'กำลังบันทึก' ถ้าไม่ให้แสดง 'ลงทะเบียน'
                    </Text> // ปิดแท็ก Text ปุ่ม
            </Pressable> // ปิดแท็ก Pressable ปุ่มลงทะเบียน
       </ScrollView> // ปิดแท็ก ScrollView
    </KeyboardAvoidingView> // ปิดแท็ก KeyboardAvoidingView
    ) // ปิดคำสั่ง return
} // ปิดฟังก์ชัน RegisterScreen

export default RegisterScreen // ส่งออกคอมโพเนนต์ RegisterScreen เป็นค่าเริ่มต้น