import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
//import axios from 'axios';

export default function SendMessage() {

    const [inputFields, setInputFields] = useState({ recipients: "" });
    const [messageInputFields, setMessageInputFields] = useState({ messages: "" });

    const [firstpage, setFirstpage] = useState(1);
    const [countletter, setCountletter] = useState(0);
    const [switchpages, setSwitchpages] = useState(false);
    const [otherpages, setOtherpages] = useState(1);
    const [countotherletters, setCountotherletters] = useState(0);

    const [line22, setLine22] = useState("0");
    const [line19, setLine19] = useState("0");
    const [line4, setLine4] = useState("0");
    const [line5, setLine5] = useState("0");
    const [line13, setLine13] = useState("0");
    const [line10, setLine10] = useState("0");
    const [line6, setLine6] = useState("0");
    const [line5_1, setLine5_1] = useState("0");
    const [line14, setLine14] = useState("0");

    const handleChangeRecipients = (e) => {
        const { name, value } = e.target;
        const replace_comma = value.replaceAll(",", " ");
        const replace_enter = replace_comma.replaceAll(/\s+/g, " ");
        const replace_space_tab_string = replace_enter.replaceAll(/\s\s+/g, " ");

        const replace_080 = replace_space_tab_string.replaceAll("080", "23480");
        const replace_070 = replace_080.replaceAll("070", "23470");
        const replace_081 = replace_070.replaceAll("081", "23481");
        const all_sanitized = replace_081.replaceAll("090", "23490");

        setInputFields({ ...inputFields, [name]: all_sanitized });
        const number_to_string = Object.values(inputFields).toString();

        const matchline22 = number_to_string.match(/(234705)\d{7}|(234805)\d{7}|(234807)\d{7}|(234815)\d{7}|(234811)\d{7}|(234905)\d{7}/g);
        setLine22((Object.keys(matchline22 || {}).length))

        const matchline19 = number_to_string.match(/(234803)\d{7}|(234706)\d{7}|(234703)\d{7}|(234810)\d{7}|(234806)\d{7}|(234813)\d{7}|(234816)\d{7}|(234814)\d{7}|(234903)\d{7}|(234906)\d{7}|(234708)\d{7}|(234802)\d{7}|(234808)\d{7}|(234812)\d{7}|(234701)\d{7}|(234902)\d{7}|(234907)\d{7}|(234809)\d{7}|(234817)\d{7}|(234818)\d{7}|(234909)\d{7}|(234908)\d{7}/g);
        setLine19((Object.keys(matchline19 || {}).length))

        const matchline4 = number_to_string.match(/(2347028)\d{6}|(2347029)\d{6}|(234819)\d{7}|(2347026)\d{6}|(2347025)\d{6}|(234704)\d{7}|(234707)\d{7}/g);
        setLine4((Object.keys(matchline4 || {}).length))

        const matchline5 = number_to_string.match(/(234709)\d{7}|(2347027)\d{6}|(234804)\d{7}/g);
        setLine5((Object.keys(matchline5 || {}).length))

        const matchline1 = number_to_string.match(/(1)\d{10}/g);
        setLine13((Object.keys(matchline1 || {}).length))

        const matchline7 = number_to_string.match(/(7)\d{11}/g);
        console.log(matchline7)
        setLine10((Object.keys(matchline7 || {}).length))

        const matchline20 = number_to_string.match(/(20)\d{10}/g);
        setLine6((Object.keys(matchline20 || {}).length))

        const matchline27 = number_to_string.match(/(27)\d{8}/g);
        setLine5_1((Object.keys(matchline27 || {}).length))

        const matchline30 = number_to_string.match(/(30)\d{9}/g);
        setLine14((Object.keys(matchline30 || {}).length))

    }

    useEffect(()=>{
    },[inputFields])

    const handleMessage = (e) => {
        const { name, value } = e.target;

        setMessageInputFields({ ...messageInputFields, [name]: value });
        const str_lenght = Object.values(messageInputFields).toString()

        if (str_lenght.length < 161) {
            setFirstpage(1)
            setSwitchpages(false)
            setCountletter(str_lenght.length)
        }

        if (str_lenght.length > 160) {
            setSwitchpages(true)
            setOtherpages((Math.ceil((str_lenght.length - 160) / 154)) + 1)
            setCountotherletters(((str_lenght.length - 160) % 154))

        }

    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const no_of_numbers = Number(line22) + Number(line19) + Number(line4) + Number(line5) + Number(line13) + Number(line10) + Number(line6) + Number(line5_1) + Number(line14)

        const cost = (Number(line22 * 2.2) + Number(line19 * 1.9) + Number(line4 * 4) + Number(line5 * 5) + Number(line13 * 13) + Number(line10 * 10) + Number(line6 * 6) + Number(line5_1 * 5) + Number(line14 * 14)) * Number(otherpages)

        if (no_of_numbers === 0 || countletter === 0) {
            Swal.fire({
                icon: 'warning',
                title: "Number and message have not been entered",
                text: "Your messages will not be sent",
                buttons: true,
                dangerMode: true,
            })
        } else {
            Swal.fire({
                icon: 'info',
                title: 'Total Numbers: ' + no_of_numbers + ' Total Pages: ' + Number(otherpages) + ' Total Cost: ' + cost,
                text: "Your messages will now be sent",
                buttons: true,
                dangerMode: true,
            }).then((willDelete) => {
                if (willDelete) {
                    Swal.fire("Your message has now been sent", {
                        icon: "success",
                    });
                }
            });

        }

    }

    return (
        <main className=''>

            <div className='bg-white py-12'>
                <div className='w-full lg:w-5/6 2xl:w-1/2 lg:mx-auto lg:p-12'>

                    <div className='border-2 border-slate-200 mx-2 lg:mx-0 rounded-xl shadow-lg py-14 px-8 lg:p-14 space-y-5'>
                        <div>

                            <form onSubmit={handleSubmit}>

                                <span className='text-red-500'>2.2 per unit for these number (e.g 08053454434): Total is {line22 * 2.2} naira  </span><br></br>
                                <span className='text-red-500'>1.9 per unit for these number (e.g 08034543345): Total is {line19 * 1.9} naira  </span><br></br>
                                <span className='text-red-500'>4 per unit for these number (e.g 08193454678): Total is {line4 * 4} naira  </span><br></br>
                                <span className='text-red-500'>5 per unit for these number (e.g 07094345654): Total is {line5 * 5} naira  </span><br></br>
                                <span className='text-red-500'>13 per unit for these number (e.g 16545349637): Total is {line13 * 13} naira  </span><br></br>
                                <span className='text-red-500'>10 per unit for these number (e.g 752390765348): Total is {line10 * 10} naira  </span><br></br>
                                <span className='text-red-500'>6 per unit for these number (e.g 206546234967): Total is {line6 * 6} naira  </span><br></br>
                                <span className='text-red-500'>5 per unit for these number (e.g 2735674567): Total is {line5_1 * 5} naira  </span><br></br>
                                <span className='text-red-500'>14 per unit for these number (e.g 30238545635): Total is {line14 * 14} naira  </span><br></br>


                                <div className='space-y-5'>

                                    <div className='w-full md:space-x-6 mb-4 lg:mb-0 space-y-4 md:space-y-0 justify-between lg:py-1.5'>
                                        <label className="block text-sm">
                                            <span className="">Recipients</span>
                                            <textarea value={inputFields.recipients}
                                                onChange={handleChangeRecipients}
                                                as="textarea"
                                                type="text"
                                                name="recipients"
                                                className="w-full border px-4 py-3 rounded"
                                                placeholder="recipients"
                                            ></textarea>

                                        </label>
                                    </div>

                                    <div className='w-full md:space-x-6 mb-4 lg:mb-0 space-y-4 md:space-y-0 justify-between lg:py-1.5'>
                                        <label className="block text-sm">
                                            <span className="">Message</span>
                                            <textarea value={messageInputFields.messages}
                                                onChange={handleMessage}
                                                as="textarea"
                                                type="text"
                                                name="messages"
                                                className="w-full border px-4 py-3 rounded"
                                                placeholder="messages"
                                            ></textarea>

                                        </label>
                                    </div>

                                    <span className='text-red-500'>Page: {firstpage}, You have {160 - countletter} letters left on page 1</span>
                                    <br></br>

                                    {switchpages && <span className='text-red-500'>You are now in page: {otherpages}, You have {154 - countotherletters} letters left on this page </span>}


                                    <div className='space-y-3'>
                                        <button className='bg-orange-600 w-full rounded-md text-white py-3 px-8 space-x-4 text-lg font-medium shadow-md shadow-orange-200'> Send message</button>

                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}

