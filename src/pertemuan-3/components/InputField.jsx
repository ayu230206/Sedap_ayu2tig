import UserForm from "../UserForm";//im
export default function InputField({Label, type, placeholder}) {//props untuk menerima data dari parent component
    return (//component InputField untuk membuat input field dengan styling Tailwind CSS
        <div className="mb-3">
            <label className="block text-gray-700 font-medium mb-1">{Label}</label>//label untuk memberikan label pada input field
            <input
                type={type}//type untuk menentukan jenis input field (text, email, date, dll)
                placeholder={placeholder}//placeholder untuk memberikan petunjuk kepada pengguna 
                className="w-full p-2 border border-gray-300 rounded"//className untuk memberikan S
            />
        </div>
    );
}
