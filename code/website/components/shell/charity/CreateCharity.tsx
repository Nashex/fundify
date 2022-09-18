import CharityCard from './CharityCard';
import { TbPlus, TbX } from 'react-icons/tb';
import { useState, useEffect } from 'react';
import { Button, Checkbox, Modal, Textarea, TextInput, Notification } from '@mantine/core';
import { firestore } from '../../../firebase';
import { addDoc, arrayUnion, collection, doc, FieldValue, setDoc, updateDoc } from "firebase/firestore"; 
import { useAuth } from '../../../context/AuthProvider';
import useStore from './../../../state/store';


function CreateCharity() {
    const { user } = useAuth();
    const [opened, setOpened] = useState(false);

    // Zustand
    const addCharity = useStore((state: any) => state.addCharity);

    const open = () => setOpened(true);
    const close = () => setOpened(false);

    const [form, setForm] = useState<any>({});
    const [error, setError] = useState("");

    const updateField = (key: string, value: string) => {
        setForm((prev: any) => {
            return ({ ...prev, [key]: value });
        })
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!form["name"] || !form["desc"]) {
            setError("Missing fields.");
            return setTimeout(() => setError(""), 2500);
        }
        
        if (!user?.uid) return setError("An unexpected error occured");

        const { uid } = user;
        const charity = await addDoc(collection(firestore, "charities"), {
            owner: uid,
            ...form
        });

        addCharity({
            id: charity.id,
            owner: uid,
            ...form
        });

        await updateDoc(doc(firestore, "users", uid), {
            charities: arrayUnion(charity.id)
        });
        close();
    }

    return (
        <div>
            <Modal
                opened={opened}
                onClose={close}
                centered
                size="lg"
                title={<h1 className="text-3xl font-medium">Create a <span className="text-green-400">Charity</span></h1>}
            >
                {
                    error && (
                        <Notification icon={<TbX size={18} />} color="red">
                            {error}
                        </Notification>
                    )
                }
                <form>
                    <TextInput
                        placeholder="The Charity's Name"
                        label="Charity Name"
                        className="mt-2"
                        value={form["name"]}
                        onChange={(e) => updateField("name", e.target.value)}
                        withAsterisk
                    />
                    <Textarea
                        placeholder="Put a brief description of what your charity does and who it serves!"
                        className="mt-2"
                        label="Charity Description"
                        value={form["desc"]}
                        onChange={(e) => updateField("desc", e.target.value)}
                        withAsterisk
                    />
                    <Checkbox
                        label="Is your charity filed as a 501c3?"
                        value={form["status"]}
                        className="mt-2"
                        required
                    />
                    <button
                        className="py-2 bg-green-400 text-white w-full mt-3 rounded"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Create
                    </button>
                </form>
            </Modal>

            <div onClick={open}>
                <CharityCard>
                    <p className="text-xl">Add a charity!</p>
                    <TbPlus className="my-auto text-green-200" size={75} />
                </CharityCard>
            </div>
        </div>
    );
}

export default CreateCharity;