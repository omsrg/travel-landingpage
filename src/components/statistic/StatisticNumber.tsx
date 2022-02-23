import * as React from 'react';

type AmountProps = {
	value: string;
	label: string;
};

export default function StatisticNumber({ value, label }: AmountProps) {
	return (
		<div className='w-32 text-center'>
			<h1 className='text-primary-500'>{value}</h1>
			<p className='font-opensans text-dark font-semibold py-1'>{label}</p>
		</div>
	);
}
