'use client'

import { Fragment } from 'react'
import { Highlight, themes, Prism } from 'prism-react-renderer'

(typeof global !== "undefined" ? global : window).Prism = Prism
require("prismjs/components/prism-python")
require("prismjs/components/prism-bash")
require("prismjs/components/prism-powershell")
require("prismjs/components/prism-markdown")

export function Fence({
  children,
  language,
}: {
  children: string
  language: string
}) {
  return (
    <Highlight
      code={children.trimEnd()}
      language={language}
      theme={themes.nightOwl}
    >
      {({ className, style, tokens, getTokenProps }) => (
        <pre className={className} style={style}>
          <code>
            {tokens.map((line, lineIndex) => (
              <Fragment key={lineIndex}>
                {line
                  .filter((token) => !token.empty)
                  .map((token, tokenIndex) => (
                    <span key={tokenIndex} {...getTokenProps({ token })} />
                  ))}
                {'\n'}
              </Fragment>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  )
}
