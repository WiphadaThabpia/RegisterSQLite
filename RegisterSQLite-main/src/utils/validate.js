export function validateForm({ name, surname, studentId, username, // ประกาศและส่งออกฟังก์ชัน validateForm โดยทำ Destructuring เพื่อดึงค่า name, surname, studentId, username
password, confirm }) { // ดึงค่า password และ confirm ออกมาจากอ็อบเจกต์ข้อมูลฟอร์มที่ส่งเข้ามา
    const errors = {} // สร้างอ็อบเจกต์ว่างชื่อ errors ไว้สำหรับรวบรวมข้อความแจ้งเตือนความผิดพลาดของแต่ละช่อง

    if (name.trim() === '') errors.name ='กรุณากรอกชื่อ' // เช็คว่าถ้าตัดช่องว่างตัดหัวท้ายออกแล้วเป็นค่าว่าง ให้เพิ่มข้อความ error ในช่อง name
    if (surname.trim() === '') errors.surname = 'กรุณากรอกนามสกุล' // เช็คว่าถ้าตัดช่องว่างแล้วนามสกุลเป็นค่าว่าง ให้เพิ่มข้อความ error ในช่อง surname

    if (!/^\d{10}$/.test(studentId.trim())) { // เช็คด้วย Regex ว่าถ้ารหัสนิสิตไม่ใช่ตัวเลขล้วนจำนวน 10 หลักพอดี
        errors.studentId = 'รหัสนิสิตต้องมี 10 หลัก' // บันทึกข้อความ error ในช่อง studentId
    } // ปิดเงื่อนไขรหัสนิสิต

    if (!/^[a-zA-Z0-9_]{4,20}$/.test(usernsme.trim())){ // เช็คว่าชื่อผู้ใช้ยาว 4-20 ตัว และใช้ได้แค่ a-z, A-Z, 0-9, _ (หมายเหตุ: ตัวแปรพิมพ์ตก usernsme -> ควรแก้เป็น username)
        errors.username = 'ชื่อผู้ใช้ยาว 4 - 20 ตัว ใช้ได้เฉพาะ a-z A-Z 0-9 และ _' // บันทึกข้อความ error ในช่อง username
    } // ปิดเงื่อนไขชื่อผู้ใช้

    if (password.length < 8) { // เช็คว่าความยาวรหัสผ่านน้อยกว่า 8 ตัวอักษรหรือไม่
        errors.password = 'รหัสผ่านต้องยาวอย่างน้อย 8 ตัวอักษร' // ถ้าไม่งั้นบันทึก error รหัสผ่านสั้นเกินไป
    }  else if (!/[a-zA-Z]/.test(password) || !/\d/.test(password)) { // ถ้าความยาวผ่านแล้ว ให้เช็คว่าขาดตัวอักษรภาษาอังกฤษหรือขาดตัวเลขหรือไม่
        errors.password = 'รหัสผ่านต้องมีทั้งตัวอักษรและตัวเลข' // บันทึก error รูปแบบรหัสผ่านไม่ตรงตามเงื่อนไข
    } // ปิดเงื่อนไขรหัสผ่าน

    return errors // ส่งคืนอ็อบเจกต์ errors กลับไป (ถ้าไม่มี error จะได้อ็อบเจกต์ว่าง {})
} // ปิดฟังก์ชัน validateForm

export function hasError(errors) { // ประกาศและส่งออกฟังก์ชัน hasError สำหรับเช็คว่ามีข้อผิดพลาดเกิดขึ้นหรือไม่
    return Object.keys(errors).length > 0 // แปลงอ็อบเจกต์ errors เป็น Array ของ Key เพื่อเช็คว่ามีข้อผิดพลาดมากกว่า 0 รายการหรือไม่ (คืนค่า true/false)
} // ปิดฟังก์ชัน hasError