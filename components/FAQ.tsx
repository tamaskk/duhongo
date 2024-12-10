import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
];

export default function FAQ() {
  return (
    <div className="w-screen">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Gyakran ismételt kérdések</h2>
          <dl className="mt-10 space-y-6 divide-y divide-white/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="group flex w-full items-start justify-between text-left text-white">
                        <span className="text-base/7 font-semibold">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          <PlusSmallIcon
                            aria-hidden="true"
                            className={`size-6 transition-transform duration-300 ${
                              open ? 'rotate-45 hidden' : 'rotate-0 block'
                            }`}
                          />
                          <MinusSmallIcon
                            aria-hidden="true"
                            className={`size-6 transition-transform duration-300 ${
                              open ? 'block' : 'hidden'
                            }`}
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel
                      as="dd"
                      className={`mt-2 pr-12 overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
                        open ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-base/7 text-gray-300">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
