import { SimpleScatterChart } from "../components/SimpleScatterChart"
import { useGetTasks } from "../hooks/usegettasks"

const Statistics = () => {
    const { tasks} = useGetTasks()
    console.log(tasks)
    return (
        <>
            <SimpleScatterChart
                title='Statistics'
                data={tasks  || []}
            />
        </>

    )
}
export { Statistics }