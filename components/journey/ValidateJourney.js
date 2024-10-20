"use client";

import { useFormStatus } from "react-dom";
import { useRouter } from 'next/navigation';
import { validateStartJourney } from "@/app/actions/journey/action";
import { toast } from 'react-hot-toast';
import { useEffect, useState } from "react";

function Submit() {

    const { pending } = useFormStatus();

    return (
        <button type="submit" className={pending ? "btn global-primary-btn managedDisabled" : "btn global-primary-btn"}> {
            pending ?
                <> Please wait... <i className="fa fa-spinner loading_animation"></i></>
                :
                `Start`
        }
        </button>
    )
}

const ValidateJourney = () => {

    const { push, refresh } = useRouter();
    const [isPressed, setIsPressed] = useState(false);

    const handleForm = async () => {
        try {
            const response = await validateStartJourney();

            if (response.status === 201) {
                push('/dashboard/booking/submitJourney');
                setIsPressed(true);
                return;
            } else if (response.status === 101) {
                toast.error("Please submit pending booking orders!")
                push('/dashboard/history');
                setIsPressed(true);
                return;
            } else {
                setIsPressed(false);
                return toast.error(response.message);
            }

        } catch (error) {
            setIsPressed(false);
            console.log(error)
        }
    }

    useEffect(() => {
        refresh();
    }, []);
    return (
        <>
            <form action={handleForm} translate="no">
                {
                    isPressed
                        ?
                        <div className="isPressedValidation">
                            <p>Processing Please Wait <i className="fa fa-spinner"></i></p>
                        </div>
                        :
                        <Submit />
                }
            </form>
        </>
    )
}

export default ValidateJourney