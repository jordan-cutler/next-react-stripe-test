import React from 'react';
import { render } from '@testing-library/react';
import Index from '../../pages/index';

describe('Home page', () => {
  it('matches snapshot', () => {
    const { container } = render(<Index />, {});

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div>
          <div
            class="MuiContainer-root MuiContainer-maxWidthMd"
          >
            <h1
              class="MuiTypography-root MuiTypography-h3"
            >
              Enter to make Baby Yoda happy
            </h1>
            <a
              href="/home"
            >
              <div
                style="display: inline-block; max-width: 100%; overflow: hidden; position: relative; box-sizing: border-box; margin: 0px;"
              >
                <div
                  style="box-sizing: border-box; display: block; max-width: 100%;"
                >
                  <img
                    alt=""
                    aria-hidden="true"
                    role="presentation"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQwIiBoZWlnaHQ9IjM2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
                    style="max-width: 100%; display: block; margin: 0px; padding: 0px;"
                  />
                </div>
                <noscript />
                <img
                  alt="Baby yoda waving"
                  decoding="async"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; box-sizing: border-box; padding: 0px; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    `);
  });
});
