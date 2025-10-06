import React, { useEffect, useRef } from 'react';
import './css/take-this-jobs-907-315.asset.css';

/**
 * PUBLIC_INTERFACE
 * TakeThisJobs907315: React port of assets/take-this-jobs-907-315.html
 * - Preserves class names for pixel accuracy
 * - Minimal interactivity from assets JS implemented via useEffect
 * - Images referenced from /assets/figmaimages (served from public)
 */
export default function TakeThisJobs907315() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    root.style.setProperty('--dpr', dpr);

    const overlay = root.querySelector('.overlay');
    const modal = root.querySelector('.modal');
    const yesBtn = root.querySelector('.modal .cta.primary');
    const cancelBtn = root.querySelector('.modal .cta.white');
    const bottomCta = root.querySelector('.down-button .cta.primary');

    const closeModal = () => {
      if (overlay) overlay.style.display = 'none';
      if (modal) modal.style.display = 'none';
    };
    const openModal = () => {
      if (overlay) overlay.style.display = '';
      if (modal) modal.style.display = '';
    };

    const addFocus = (e) => {
      if (e.key === 'Tab') root.classList.add('show-focus');
    };
    root.addEventListener('keydown', addFocus);

    const yesClick = () => {
      if (!yesBtn) return;
      yesBtn.style.transform = 'scale(0.98)';
      setTimeout(() => {
        yesBtn.style.transform = '';
        closeModal();
      }, 150);
    };
    const cancelClick = () => closeModal();
    const bottomClick = () => {
      if (modal && modal.style.display === 'none') openModal();
    };

    if (yesBtn) yesBtn.addEventListener('click', yesClick);
    if (cancelBtn) cancelBtn.addEventListener('click', cancelClick);
    if (bottomCta) bottomCta.addEventListener('click', bottomClick);

    return () => {
      root.removeEventListener('keydown', addFocus);
      if (yesBtn) yesBtn.removeEventListener('click', yesClick);
      if (cancelBtn) cancelBtn.removeEventListener('click', cancelClick);
      if (bottomCta) bottomCta.removeEventListener('click', bottomClick);
    };
  }, []);

  return (
    <div className="take-this-jobs-907-315" data-screen-id="screen_907:315" ref={rootRef}>
      <div className="root-frame" role="region" aria-label="Take this jobs screen">
        <div className="top" data-id="907:674">
          <div className="status-bar" data-id="907:675" role="group" aria-label="Status bar">
            <div className="status-right" data-id="I907:675;44:1266">
              <div className="battery" data-id="I907:675;44:1267">
                <img className="battery-path-1" alt="" src="/assets/figmaimages/figma_image_907_675_44_1270.png" />
                <img className="battery-path-2" alt="" src="/assets/figmaimages/figma_image_907_675_44_1271.png" />
              </div>
              <div className="cell-bars" data-id="I907:675;44:1274" aria-hidden="true">
                <div className="cell-bar"></div>
                <div className="cell-bar"></div>
                <div className="cell-bar"></div>
                <div className="cell-bar"></div>
              </div>
              <div className="wifi" data-id="I907:675;44:1279" aria-hidden="true"></div>
            </div>
            <div className="status-time" data-id="I907:675;44:1283" aria-label="time">
              <span className="text time" data-id="I907:675;44:1284">9:41</span>
            </div>
          </div>

          <div className="top-bar" data-id="907:676" role="group" aria-label="Top bar">
            <div className="topbar-left">
              <img className="icon icon-chevron-left" alt="Back" src="/assets/figmaimages/figma_image_907_676_512_5564.png" />
              <img className="icon icon-chevron-left-glyph" alt="" src="/assets/figmaimages/figma_image_907_676_512_5564_517_10991.png" />
            </div>
            <div className="topbar-title" data-id="I907:676;512:5580">
              <div className="text header-title" data-id="I907:676;512:5565">Job Details</div>
              <div className="text header-subtitle" data-id="I907:676;512:5579">task#5323</div>
            </div>
            <div className="topbar-right">
              <img className="icon icon-dots" alt="More" src="/assets/figmaimages/figma_image_907_676_512_5566.png" />
              <img className="icon icon-dots-glyph" alt="" src="/assets/figmaimages/figma_image_907_676_512_5566_517_11253.png" />
            </div>
          </div>

          <div className="content" data-id="907:677">
            <section className="section job-informations" data-id="907:678" aria-label="Job Informations">
              <div className="row meta" data-id="907:679">
                <div className="text job-date" data-id="907:680">10/05/2020</div>
                <div className="badges" data-id="907:681">
                  <div className="badge-left" data-id="907:682">
                    <img className="icon icon-clock" alt="" src="/assets/figmaimages/figma_image_907_682_503_7440.png" />
                    <img className="icon icon-clock-glyph" alt="" src="/assets/figmaimages/figma_image_907_682_503_7440_517_11348.png" />
                    <span className="text badge-left-text" data-id="I907:682;503:7434">3d</span>
                  </div>
                  <div className="badge-word" data-id="907:683">
                    <span className="text badge-word-text" data-id="I907:683;503:7446">Open</span>
                  </div>
                </div>
              </div>

              <div className="info" data-id="907:684">
                <div className="text small" data-id="907:685">task#11123</div>
                <div className="text title" data-id="907:686">Stainless roof renovations</div>
                <div className="row status" data-id="907:687">
                  <img className="icon icon-location" alt="" src="/assets/figmaimages/figma_image_907_688.png" />
                  <img className="icon icon-location-glyph" alt="" src="/assets/figmaimages/figma_image_907_688_517_10785.png" />
                  <div className="text status-text" data-id="907:689">Rose boulevard 12th, Cal, USA 1,3 km</div>
                </div>
              </div>

              <div className="row unit-cta" data-id="907:690">
                <div className="avatars" data-id="907:691">
                  <img className="avatar a1" alt="Avatar 1" src="/assets/figmaimages/figma_image_907_692.png" />
                  <div className="avatar a2" aria-hidden="true"></div>
                  <div className="avatar a3" aria-hidden="true"></div>
                </div>
                <div className="info people" data-id="907:695">
                  <div className="text people-title" data-id="907:696">3 people</div>
                  <div className="text small" data-id="907:697">Keiko,  Jason, Peter</div>
                </div>
              </div>
            </section>

            <section className="section unit-informations" data-id="907:698" aria-label="Unit Informations">
              <div className="text section-caption" data-id="907:699">UNIT INFORMATION</div>
              <div className="text title" data-id="907:700">Stainless roof renovations</div>

              <div className="map-wrap" data-id="907:701">
                <img className="map-image" alt="Map" src="/assets/figmaimages/figma_image_907_702.png" />
                <div className="map-pin" data-id="907:703">
                  <img className="pin" alt="Pin" src="/assets/figmaimages/figma_image_907_704.png" />
                </div>
              </div>

              <div className="row status" data-id="907:705">
                <div className="icon-wrap"></div>
                <div className="text status-text" data-id="907:707">Rose boulevard 12th 60121, Cal, USA 1,3 km</div>
              </div>

              <div className="text link" data-id="907:708">View details</div>
            </section>

            <section className="section managers-note" data-id="907:709" aria-label="Manager's note">
              <div className="text section-caption" data-id="907:710">MANAGER NOTE</div>
              <div className="text paragraph" data-id="907:711">
                This machine can’t working well every i turn it on the AC always make a noisy sound, and the AC can always hot ever...
              </div>
              <div className="text link" data-id="907:712">View more</div>
            </section>

            <section className="section manager-informations" data-id="907:713" aria-label="Manager Informations">
              <div className="text section-caption" data-id="907:714">MANAGER INFORMATION</div>
              <div className="row manager-card" data-id="907:715">
                <img className="manager-photo" alt="Manager" src="/assets/figmaimages/figma_image_907_716.png" />
                <div className="info" data-id="907:717">
                  <div className="text manager-name" data-id="907:718">Jenny Wilson</div>
                  <div className="text small" data-id="907:719">ID#008638</div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="down-button" data-id="907:361" role="group" aria-label="Bottom Action">
          <div className="bottom" data-id="I907:361;512:4975">
            <button className="cta primary" data-id="I907:361;512:5025" type="button">
              <span className="cta-shadow" aria-hidden="true"></span>
              <span className="cta-text">Take Job</span>
            </button>
          </div>
          <div className="home-indicator" data-id="I907:361;512:4992">
            <div className="home-line" data-id="I907:361;512:4993"></div>
          </div>
        </div>

        <div className="overlay" data-id="907:362" aria-hidden="true"></div>

        <div className="modal" data-id="907:363" role="dialog" aria-modal="true" aria-label="Approval">
          <div className="modal-content" data-id="907:364">
            <div className="modal-illustration" data-id="907:365">
              <img className="illustration" alt="" src="/assets/figmaimages/figma_image_907_366.png" />
            </div>
            <div className="modal-desc" data-id="907:367">
              <div className="text modal-title" data-id="907:369">Take this jobs?</div>
              <div className="text modal-subtitle" data-id="907:370">Service Gutters protection installation </div>
              <div className="modal-buttons" data-id="907:371">
                <button className="cta primary" data-id="907:372" type="button">
                  <span className="cta-shadow" aria-hidden="true"></span>
                  <span className="cta-text">Yes, take this task</span>
                </button>
                <button className="cta white" data-id="907:373" type="button">
                  <span className="cta-shadow white" aria-hidden="true"></span>
                  <span className="cta-text white">Cancel</span>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
