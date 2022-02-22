import * as React from 'react';

export default function FormInput({ children }: { children: React.ReactNode }) {
	return <form>{children}</form>;
}
