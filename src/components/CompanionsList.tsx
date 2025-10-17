import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface CompanionsListProps {
  title: string
  companions?: Companion[]
  classNames?: string
}

const CompanionsList = ({
  title,
  companions,
  classNames,
}: CompanionsListProps) => {
  // console.log(companions)
  return (
    <article className={cn('companion-list', classNames)}>
      <h2 className='text-3xl font-bold'>Recent Sessions</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='text-lg w-2/3'>Lessons</TableHead>
            <TableHead className='text-lg'>Subject</TableHead>
            <TableHead className='text-lg text-right'>Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companions?.map((companion) => (
            <TableRow key={companion.id}>
              <TableCell>
                <Link href={`/companions/${companion.id}`}>
                  {companion.subject}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </article>
  )
}

export default CompanionsList
