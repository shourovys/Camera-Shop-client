/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Camera Gear Repair Services',
    description:
      'We have a philosophy that anything broken can be fixed. However, sometimes a repair may not make economic sense. Our staff can help you determine the best course of action and give you an immediate rough idea of what a repair will likely cost.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Camera Cleaning',
    description:
      'Consider it a car wash for your camera. Whether its a sleek, little compact or a rugged SLR our in-house "clean and check" will have your camera looking its best. Furthermore, we ensure that your camera is performing properly.',
    icon: ScaleIcon,
  },
  {
    name: 'Sensor Cleaning',
    description:
      'Have you noticed small dark spots recurring around the same location in your photos? This is commonly caused by dust or residue on your cameras image-capture device (CCD or CMOS).Our thorough cleaning process is designed to rid your sensor of all foreign elements. ',
    icon: LightningBoltIcon,
  },
  {
    name: 'Digital Prints',
    description:
      'Our thorough cleaning process is designed to rid your sensor of all foreign elements. We first vacuum the area around the sensor to collect any dust that may attach itself to your sensor in the immediate future. Next, we use an antistatic brush to sweep the optic glass protecting your sensor.',
    icon: AnnotationIcon,
  },
]

export default function Features() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to send money
          </p>
          
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
