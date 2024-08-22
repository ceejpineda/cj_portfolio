import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export default function OppositeContentTimeline() {
  return (
    <>
    <div className='prose prose-base'>
        <h4 className='text-center'>Educational Background</h4>
        <Timeline position="alternate">
        <TimelineItem>
            <TimelineOppositeContent>
            <p className='text-sm'>College (2024)</p>
            <p className='text-sm font-semibold text-blue-700'>Bachelor of Science in Information Technology</p>
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineDot color='secondary' />
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent><p className='font-semibold'>National University - Laguna</p></TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent>
            <p className='font-semibold'>Legazpi City Science High School</p>
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineDot color='success' />
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <p className='text-sm'>Senior High School (2020)</p>
                <p className='text-sm font-semibold text-blue-700'>STEM</p>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent>
            <p className='text-sm'> Junior High School (2018) </p>
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineDot color='success' />

            </TimelineSeparator>
            <TimelineContent><p className='font-semibold'>St. Raphael Academy</p></TimelineContent>
        </TimelineItem>
        </Timeline>
    </div>
    </>
  );
}
