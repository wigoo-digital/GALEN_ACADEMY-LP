import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import type { HeadFC, PageProps } from 'gatsby';
import * as React from 'react';


const CoursePage: React.FC<PageProps> = () => {
    return (
        <main>
            <div>
                <Header />
            </div>
        </main>
    )
}

export default CoursePage

export const Head: HeadFC = () => <title>Curso</title>;
