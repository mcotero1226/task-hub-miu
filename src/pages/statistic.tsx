import { SimpleScatterChart } from "../components/SimpleScatterChart"
import { useGetTasks } from "../hooks/usegettasks"

const Statistics = () => {
    const { tasks = [] } = useGetTasks()
    return (
        <>
            <SimpleScatterChart
                title='Statistics'
                data={tasks}
            />
        </>

    )
}
export { Statistics }