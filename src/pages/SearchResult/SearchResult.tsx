import { useSearchParams } from 'react-router-dom';
import styles from './SearchResult.module.scss';
import useSWR from 'swr';
import {fetchExercises} from '@/api';
import { Spin } from 'antd';
import { ExerciseList } from '@/components/ExerciseList/ExerciseList';
        


export const SearchResult = () => {
    const [params] = useSearchParams();
    const stringParams = params.toString();

    const fetcher = () => fetchExercises(stringParams);
    
    const {data: exercises, error, isLoading} = useSWR( `/searchResult?${stringParams}`,  fetcher );

    if(error) return <div>Помилка отримання данних</div>;
    if(isLoading) return <Spin size="large" />
    return (
        <div className={styles.root}>
             <ExerciseList exercises={exercises!} />
        </div>
    );
};