'use client';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const NewsPage = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        // fetch(
        //     'https://content.guardianapis.com/search?api-key=cb5c8f1d-41e3-4481-b13e-7b075cf3e537&show-fields=thumbnail,headline,byline,bodyText'
        // )
        //     .then((res) => {
        //         return res.json();
        //     })
        //     // json으로바꿈
        //     .then((data) => {
        //         console.log(data);
        //         setNews(data.response.results);
        //         // 근데 웨 굳이 useState를 넣어야되요? 그냥 할당하면 안되나?
        //     })
        //     // resolve 실행
        //     .catch((err) => {
        //         console.log(err);
        //     });
        // // 실패햇을때
        // async로 바꿔보자
        const fetchNews = async () => {
            try {
                const response = await axios.get(
                    'https://content.guardianapis.com/search?api-key=cb5c8f1d-41e3-4481-b13e-7b075cf3e537&show-fields=thumbnail,headline,byline,bodyText'
                );
                console.log(response.data);
                setNews(response.data.response.results);
            } catch (error) {
                console.error;
            }
        };

        fetchNews();
    }, []);
    // []안의 값은 어떤 것에 의존해 실행되는가
    // 근데 페이지 열자마자 실행될거잔어? 그럼 비워
    // 버튼 누르면 실행된다? 그럼 [버튼] 일케
    return (
        <div className="py-12 bg-slate-50">
            <h2 className="px-10 py-5">NEWS</h2>
            <ul className="divide-y  ">
                {news.map((item) => (
                    <li key={item.id} className="  py-3 px-2">
                        <Link href={item.webUrl} className="flex flex-row gap-5">
                            <Image
                                src={item.fields.thumbnail}
                                alt={item.webTitle}
                                width={100}
                                height={100}
                                className="object-cover rounded w-1/3 bg-slate-200"
                            ></Image>
                            <div className="flex-1 flex flex-col justify-between overflow-hidden">
                                <strong className="truncate ">{item.webTitle}</strong>
                                <p className="text-slate-600 text-sm ">{item.webPublicationDate}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewsPage;