import React, { useEffect, useRef } from 'react';
import './css/jobs-detail-open-907-267.asset.css';

/**
 * PUBLIC_INTERFACE
 * JobsDetailOpen907267: React port of assets/jobs-detail-open-907-267.html
 */
export default function JobsDetailOpen907267() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    root.style.setProperty('--dpr', dpr);

    const addFocus = (e) => {
      if (e.key === 'Tab') root.classList.add('show-focus');
    };
    root.addEventListener('keydown', addFocus);

    const bottomCta = root.querySelector('.down-button .cta.primary');
    const click = () => {
      if (!bottomCta) return;
      bottomCta.style.transform = 'scale(0.98)';
      setTimeout(() => { bottomCta.style.transform = ''; }, 120);
    };
    if (bottomCta) bottomCta.addEventListener('click', click);

    return () => {
      root.removeEventListener('keydown', addFocus);
      if (bottomCta) bottomCta.removeEventListener('click', click);
    };
  }, []);

  return (
    <div className="jobs-detail-open-907-267" data-screen-id="screen_907:267" ref={rootRef}>
      <main className="root-frame" role="region" aria-label="Jobs Detail - Open">
        <section className="top" data-id="907:268" aria-label="Top">
          <div className="status-bar" data-id="907:269" role="group" aria-label="Status bar">
            <div className="status-time" data-id="I907:269;44:1283" aria-label="time">
              <span className="text time" data-id="I907:269;44:1284">9:41</span>
            </div>
            <div className="status-right" data-id="I907:269;44:1266">
              <div className="battery" data-id="I907:269;44:1267" aria-hidden="true">
                <img className="battery-path-1" alt="" src="/assets/figmaimages/figma_image_907_269_44_1270.png" />
                <img className="battery-path-2" alt="" src="/assets/figmaimages/figma_image_907_269_44_1271.png" />
              </div>
              <div className="cell-bars" data-id="I907:269;44:1274" aria-hidden="true">
                <div className="cell-bar"></div>
                <div className="cell-bar"></div>
                <div className="cell-bar"></div>
                <div className="cell-bar"></div>
              </div>
              <div className="wifi" data-id="I907:269;44:1279" aria-hidden="true"></div>
            </div>
          </div>

          <div className="top-bar" data-id="907:270" role="group" aria-label="Top bar">
            <div className="topbar-left" aria-label="Back">
              <img className="icon icon-chevron-left" alt="Back" src="/assets/figmaimages/figma_image_907_270_512_5564.png" />
              <img className="icon icon-chevron-left-glyph" alt="" src="/assets/figmaimages/figma_image_907_270_512_5564_517_10991.png" />
            </div>
            <div className="topbar-title" data-id="I907:270;512:5580">
              <h1 className="text header-title" data-id="I907:270;512:5565">Job Details</h1>
              <div className="text header-subtitle" data-id="I907:270;512:5579">task#5323</div>
            </div>
            <div className="topbar-right" aria-label="More options">
              <img className="icon icon-dots" alt="More" src="/assets/figmaimages/figma_image_907_270_512_5566.png" />
              <img className="icon icon-dots-glyph" alt="" src="/assets/figmaimages/figma_image_907_270_512_5566_517_11253.png" />
            </div>
          </div>

          <div className="content" data-id="907:271">
            <section className="section job-informations" data-id="907:272" aria-label="Job Informations">
              <div className="row meta" data-id="907:273">
                <div className="text job-date" data-id="907:274">10/05/2020</div>
                <div className="badges" data-id="907:275" role="group" aria-label="Badges">
                  <div className="badge-left" data-id="907:276" aria-label="Duration">
                    <img className="icon icon-clock" alt="" src="/assets/figmaimages/figma_image_907_276_503_7440.png" />
                    <img className="icon icon-clock-glyph" alt="" src="/assets/figmaimages/figma_image_907_276_503_7440_517_11348.png" />
                    <span className="text badge-left-text" data-id="I907:276;503:7434">3d</span>
                  </div>
                  <div className="badge-word" data-id="907:277">
                    <span className="text badge-word-text" data-id="I907:277;503:7446">Open</span>
                  </div>
                </div>
              </div>

              <div className="info" data-id="907:278">
                <div className="text small" data-id="907:279">task#11123</div>
                <div className="text title" data-id="907:280">Stainless roof renovations</div>
                <div className="row status" data-id="907:281">
                  <img className="icon icon-location" alt="" src="/assets/figmaimages/figma_image_907_282.png" />
                  <img className="icon icon-location-glyph" alt="" src="/assets/figmaimages/figma_image_907_282_517_10785.png" />
                  <div className="text status-text" data-id="907:283">Rose boulevard 12th, Cal, USA 1,3 km</div>
                </div>
              </div>

              <div className="row unit-cta" data-id="907:284" aria-label="People">
                <div className="avatars" data-id="907:285">
                  <img className="avatar a1" alt="Avatar 1" src="/assets/figmaimages/figma_image_907_286.png" />
                  <div className="avatar a2" aria-hidden="true"></div>
                  <div className="avatar a3" aria-hidden="true"></div>
                </div>
                <div className="info people" data-id="907:289">
                  <div className="text people-title" data-id="907:290">3 people</div>
                  <div className="text small" data-id="907:291">Keiko,  Jason, Peter</div>
                </div>
              </div>
            </section>

            <section className="section unit-informations" data-id="907:292" aria-label="Unit Informations">
              <div className="text section-caption" data-id="907:293">UNIT INFORMATION</div>
              <div className="text title" data-id="907:294">Stainless roof renovations</div>

              <div className="map-wrap" data-id="907:295">
                <img className="map-image" alt="Map" src="/assets/figmaimages/figma_image_907_296.png" />
                <div className="map-pin" data-id="907:297">
                  <img className="pin" alt="Pin" src="/assets/figmaimages/figma_image_907_298.png" />
                </div>
              </div>

              <div className="row status" data-id="907:299">
                <div className="icon-wrap" aria-hidden="true"></div>
                <div className="text status-text" data-id="907:301">Rose boulevard 12th 60121, Cal, USA 1,3 km</div>
              </div>

              <div className="text link" data-id="907:302">View details</div>
            </section>

            <section className="section managers-note" data-id="907:303" aria-label="Manager's note">
              <div className="text section-caption" data-id="907:304">MANAGER NOTE</div>
              <div className="text paragraph" data-id="907:305">
                This machine can’t working well every i turn it on the AC always make a noisy sound, and the AC can always hot ever...
              </div>
              <div className="text link" data-id="907:306">View more</div>
            </section>

            <section className="section manager-informations" data-id="907:307" aria-label="Manager Informations">
              <div className="text section-caption" data-id="907:308">MANAGER INFORMATION</div>
              <div className="row manager-card" data-id="907:309">
                <img className="manager-photo" alt="Manager" src="/assets/figmaimages/figma_image_907_310.png" />
                <div className="info" data-id="907:311">
                  <div className="text manager-name" data-id="907:312">Jenny Wilson</div>
                  <div className="text small" data-id="907:313">ID#008638</div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section className="down-button" data-id="907:314" role="group" aria-label="Bottom Action">
          <div className="bottom" data-id="I907:314;512:4975">
            <button className="cta primary" data-id="I907:314;512:5025" type="button">
              <span className="cta-shadow" aria-hidden="true"></span>
              <span className="cta-text">Take Job</span>
            </button>
          </div>
          <div className="home-indicator" data-id="I907:314;512:4992">
            <div className="home-line" data-id="I907:314;512:4993"></div>
          </div>
        </section>
      </main>
    </div>
  );
}
