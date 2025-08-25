import { useState } from 'react'
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'sonner'


// yup
// react-hook-fomr
// @hookform/resolvers
// sonner

const productFormSchema = yup.object({
    name: yup.string().required("Product name is required"),
    // email: yup.string().email()
    price: yup.string().required("Price is required")
})

const AddProductForm = () => {
    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(productFormSchema),
        defaultValues: {
            name: "",
            price: "",
            category: ""
        }
    })

    // console.log(errors)

    const [submitting, setSubmitting] = useState(false)



    const onSubmit = async (data) => {
        toast.error("Product added successfully!")
        console.log(data)
    }
    return (
        <div className='signup-container'>
            <h1>Add New Product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Product Name</label>
                    <input type="text" placeholder="NIke shoe 14." id="name" {...register("name")} />
                    {errors.name && <p style={{ color: "red", fontSize: "11px" }}>{errors.name.message}</p>}
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input type="text" placeholder="7,890" id="price" {...register("price")} />
                    {errors.price && <p style={{ color: "red", fontSize: "11px" }}>{errors.price.message}</p>}
                </div>

                <button disabled={submitting}>{submitting ? "Authenticating..." : "Create Account"}</button>
            </form>
        </div>
    )
}

export default AddProductForm