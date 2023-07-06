'use client';

import { Timeline } from 'flowbite-react';
import { HiCalendar } from 'react-icons/hi';


export default function StepperTimeline() {
  return (
    <Timeline horizontal>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Title>
            Concepcion a Coronel
          </Timeline.Title>
          <Timeline.Time>
            Diciembre 2, 2023
          </Timeline.Time>
          <Timeline.Body>
            Se enviaron 1000 cajas de bebidas Cocacola
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Title>
            Concepcion a Coronel
          </Timeline.Title>
          <Timeline.Time>
            Diciembre 3, 2023
          </Timeline.Time>
          <Timeline.Body>
            Se enviaron 1000 cajas de bebidas Fanta
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Title>
            Coronel a Concepcion
          </Timeline.Title>
          <Timeline.Time>
            Diciembre 4, 2023
          </Timeline.Time>
          <Timeline.Body>
            Se enviaron 1000 cajas de bebidas Pepsi
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  )
}


