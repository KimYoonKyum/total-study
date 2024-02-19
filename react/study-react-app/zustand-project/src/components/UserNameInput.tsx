import {ChangeEvent} from "react";
import userStore from "../store/UserStore.ts";

interface UserInputFieldProps {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}

export function UserInputField({value, onChange, placeholder}: UserInputFieldProps) {
    return (
        <input type="text" value={value} onChange={onChange} placeholder={placeholder}/>
    );
}

export default function UserNameInput() {
    const firstName = userStore((state) => state.firstName);
    const lastName = userStore((state) => state.lastName);
    const setFirstName = userStore((state) => state.setFirstName);
    const setLastName = userStore((state) => state.setLastName);

    const handleInputChange = (setter: (value: string) => void) => (event: ChangeEvent<HTMLInputElement>) => {
        setter(event.target.value);
    };

    return (
        <div>
            <div>
                <UserInputField
                    value={firstName}
                    onChange={handleInputChange(setFirstName)}
                    placeholder="first name"
                />
                <UserInputField
                    value={lastName}
                    onChange={handleInputChange(setLastName)}
                    placeholder="last name"
                />
            </div>
            <div>{`${firstName} ${lastName}`}</div>
        </div>
    );
}
