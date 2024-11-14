'use client';
import React from 'react';

const EventPage = () => {
    const handleSubmit = () => {
        e.preventDefault();
        console.log('집을 원해');
    };

    // preventDefault
    // 1. a태그를 눌러도 링크가 작동하지 않게 하고 싶을 때
    // 2. 버튼을 눌렀을 때 페이지가 새로고침되는 것을 막을 때

    return (
        <div>
            <h2>마우스 이벤트</h2>

            <button
                onClick={() => {
                    console.log('click');
                }}
                onDoubleClick={() => {
                    console.log('double click');
                }}
            >
                Click Event
            </button>

            <div
                className="w-100 h-10 bg-primary"
                onMouseEnter={() => {
                    console.log('모브');
                }}
                onMouseLeave={() => {
                    console.log('리츠');
                }}
            >
                Mouse Enter / Mouse Leave
            </div>

            <div
                onMouseMove={(e) => {
                    console.log(`X: ${e.clientX}, Y: ${e.clientY}`);
                }}
            >
                마우스를 움직여보세요
            </div>

            {/* form event */}
            <form onSubmit={handleSubmit}>
                <input
                    className="border-1"
                    type="text"
                    onChange={(e) => {
                        console.log('value changed', e.target.value);
                    }}
                    onFocus={(e) => console.log('pocus')}
                />
                <br />
                <input
                    type="checkbox"
                    onChange={(e) => {
                        console.log('Rucker', e.target.checked);
                    }}
                />
                <br />
                <select
                    onChange={(e) => {
                        console.log('무엇을', e.target.value);
                    }}
                >
                    <option value="option1">모브</option>
                    <option value="option2">리츠</option>
                    <option value="option3">테루</option>
                    <option value="option4">쇼우</option>
                </select>
                <br />
                <button type="submit">제출</button>
            </form>
        </div>
    );
};

export default EventPage;
