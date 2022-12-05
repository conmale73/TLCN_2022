import { useState, useEffect } from 'react';

const AccountDetail = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const { address } = user;
    const phoneNumber = user.phone.toString();
    const [checkGender, setCheckGender] = useState(-1);
    const [edit, setEdit] = useState(false);
    const stringAddress = `${address.homeAdd}, ${address.ward}, ${address.district}, ${address.city}`;

    const [name, setName] = useState(user.name);
    const dataPost = {
        id: user.id,
        name: name,
    };


    const handleClickGender = (id) => {
        setCheckGender(id);
    };
    const handleSubmitInfo = (e) => {
        e.preventDefault();
    };
    return (
        <div className="text-gray-800">
            <div className="flex justify-between items-center">
                <h3 className="font-semibold text-4xl">Account Detail</h3>
                <button className="text-yellow-300" onClick={(e) => setEdit((old) => !old)}>
                    {edit ? 'Hủy' : 'Sửa'}
                </button>
            </div>

            <form onSubmit={(e) => handleSubmitInfo(e)}>
                

                <div className="my-4">
                    <input
                        type="text"
                        name="name"
                        value={name}
                        className="text-2xl py-4 rounded-xl mr-8 border-gray-200"
                        disabled={!edit}
                        id="name"
                        onChange={(e) => {
                            setUserName(e.target.value);
                        }}
                        required
                    />
                    <input
                        type="tel"
                        name="id"
                        className="text-2xl py-4 rounded-xl border-gray-200"
                        value={phoneNumber}
                        disabled={!edit}
                        id="tel"
                        required
                    />
                </div>
                <h3 className="font-semibold text-4xl">Address</h3>
                <input
                    type="text"
                    className="text-2xl py-4 rounded-xl mr-8 border-gray-200"
                    value={stringAddress}
                    style={{ width: '34%' }}
                    disabled={!edit}
                    required
                ></input>
                {edit && (
                    <button type="submit" disabled={!edit} className="bg-indigo-500 cursor-pointer text-black px-7 py-3  rounded-md ">
                        CẬP NHẬT
                    </button>
                )}
            </form>
        </div>
    );
}
export default AccountDetail;