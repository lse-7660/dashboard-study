import Button, { ButtonIcon } from '@/components/button/Button';
import Card from '@/components/card/Card';
import Title from '@/components/title/Title';
import React from 'react';

const CheckTable = ({ tableDataCheck }) => {
    return (
        <Card>
            <div className="flex flex-col w-full">
                <Title title="Check Table" icon="MdMoreHoriz" />
                <main className="pt-6">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-slate-500 text-sm">
                                <th>NAME</th>
                                <th>PROGRESS</th>
                                <th>QUANTITY</th>
                                <th>DATE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableDataCheck.map((item) => (
                                <tr key={item.id}>
                                    <th className="flex gap-2 py-3">
                                        <input
                                            checked={item.name[1]}
                                            type="checkbox"
                                            name={`check-${item.id}`}
                                            id={`check-${item.id}`}
                                        />
                                        <label htmlFor={`check-${item.id}`}>{item.name[0]}</label>
                                    </th>
                                    <td>{`${item.progress}%`}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </main>
            </div>
        </Card>
    );
};

export default CheckTable;
