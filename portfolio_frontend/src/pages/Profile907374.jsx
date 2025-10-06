import React, { useEffect, useRef } from 'react';
import './css/profile-907-374.css';

/**
 * PUBLIC_INTERFACE
 * Profile907374: React port of assets/profile-907-374.html
 */
export default function Profile907374() {
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

    const rows = Array.from(root.querySelectorAll('.list-row'));
    const onDown = (row) => () => { row.style.opacity = '0.85'; };
    const onUp = (row) => () => { row.style.opacity = ''; };

    rows.forEach((row) => {
      row.addEventListener('mousedown', onDown(row));
      row.addEventListener('mouseup', onUp(row));
      row.addEventListener('mouseleave', onUp(row));
      row.addEventListener('touchstart', onDown(row), { passive: true });
      row.addEventListener('touchend', onUp(row), { passive: true });
    });

    return () => {
      root.removeEventListener('keydown', addFocus);
      rows.forEach((row) => {
        row.removeEventListener('mousedown', onDown(row));
        row.removeEventListener('mouseup', onUp(row));
        row.removeEventListener('mouseleave', onUp(row));
        row.removeEventListener('touchstart', onDown(row));
        row.removeEventListener('touchend', onUp(row));
      });
    };
  }, []);

  return (
    <div className="profile-907-374" data-screen-id="screen_907:374" ref={rootRef}>
      <main className="root-frame" role="region" aria-label="Profile screen">
        <section className="content" data-id="907:375" aria-label="Content">
          <div className="status-bar" data-id="907:376" role="group" aria-label="Status bar">
            <div className="status-right" data-id="I907:376;44:1266">
              <div className="battery" data-id="I907:376;44:1267" aria-hidden="true">
                <img className="battery-path-1" alt="" src="/assets/figmaimages/figma_image_907_376_44_1270.png" />
                <img className="battery-path-2" alt="" src="/assets/figmaimages/figma_image_907_376_44_1271.png" />
              </div>
              <div className="cell-bars" data-id="I907:376;44:1274" aria-hidden="true">
                <div className="cell-bar"></div>
                <div className="cell-bar"></div>
                <div className="cell-bar"></div>
                <div className="cell-bar"></div>
              </div>
              <div className="wifi" data-id="I907:376;44:1279" aria-hidden="true"></div>
            </div>
            <div className="status-time" data-id="I907:376;44:1283" aria-label="time">
              <span className="text time" data-id="I907:376;44:1284">9:41</span>
            </div>
          </div>

          <div className="top-bar" data-id="907:377" role="group" aria-label="Top bar">
            <div className="topbar-title" data-id="I907:377;512:3566">
              <h1 className="text header-title">Profile</h1>
            </div>
            <div className="topbar-action" aria-label="Edit profile">
              <img className="icon pencil-alt" alt="Edit" src="/assets/figmaimages/figma_image_907_377_512_3578.png" />
              <img className="icon pencil-alt-glyph" alt="" src="/assets/figmaimages/figma_image_907_377_512_3578_517_10925.png" />
            </div>
          </div>

          <section className="top-content" data-id="907:378" aria-label="Top content">
            <div className="profile-row" data-id="907:379" role="group" aria-label="Profile summary">
              <div className="profile-image-wrap" data-id="907:380">
                <img className="profile-image" alt="Profile" src="/assets/figmaimages/figma_image_907_381.png" />
              </div>
              <div className="profile-info" data-id="907:382">
                <div className="profile-info-top" data-id="907:383">
                  <div className="text profile-name" data-id="907:384">Craftsman Craig</div>
                  <div className="text profile-meta" data-id="907:385">ID#008638  •  Workers</div>
                </div>
                <div className="badge type-left" data-id="907:386" role="group" aria-label="Change role">
                  <img className="icon user-circle" alt="" src="/assets/figmaimages/figma_image_907_386_503_7440.png" />
                  <img className="icon user-circle-glyph" alt="" src="/assets/figmaimages/figma_image_907_386_503_7440_517_10915.png" />
                  <span className="text badge-text">Change to Manager</span>
                </div>
              </div>
            </div>

            <section className="overview-card" data-id="907:387" aria-label="Overview">
              <div className="overview-top" data-id="907:388">
                <div className="text overview-title" data-id="907:389">Overview</div>
                <div className="badge type-right" data-id="907:390" aria-label="Filter timeframe">
                  <span className="text">This week</span>
                  <img className="icon chevron" alt="" src="/assets/figmaimages/figma_image_907_390_512_3726.png" />
                  <img className="icon chevron-glyph" alt="" src="/assets/figmaimages/figma_image_907_390_512_3726_517_11393.png" />
                </div>
              </div>

              <div className="graph" data-id="907:391" aria-hidden="true">
                <div className="bar-group" data-id="907:392">
                  <img className="bar base" alt="" src="/assets/figmaimages/figma_image_907_393.png" />
                  <img className="bar active" alt="" src="/assets/figmaimages/figma_image_907_394.png" />
                  <div className="text bar-label" data-id="907:395">06/14</div>
                </div>
                <div className="bar-group" data-id="907:396">
                  <div className="bar base"></div>
                  <img className="bar active" alt="" src="/assets/figmaimages/figma_image_907_398.png" />
                </div>
                <div className="bar-group" data-id="907:399">
                  <div className="text bar-label" data-id="907:400">06/15</div>
                  <div className="bar base"></div>
                  <div className="bar active"></div>
                </div>
                <div className="bar-group" data-id="907:403">
                  <div className="bar base"></div>
                  <img className="bar active" alt="" src="/assets/figmaimages/figma_image_907_405.png" />
                </div>
                <div className="bar-group" data-id="907:406">
                  <div className="text bar-label" data-id="907:407">06/15</div>
                  <div className="bar base"></div>
                  <div className="bar active"></div>
                </div>
                <div className="bar-group" data-id="907:410">
                  <div className="bar base"></div>
                  <img className="bar active" alt="" src="/assets/figmaimages/figma_image_907_412.png" />
                </div>
                <div className="bar-group today" data-id="907:413">
                  <div className="text bar-label" data-id="907:414">Today</div>
                  <div className="bar base"></div>
                  <img className="bar active dot" alt="" src="/assets/figmaimages/figma_image_907_416.png" />
                </div>
              </div>

              <div className="informations" data-id="907:417" role="group" aria-label="Overview totals">
                <div className="info-col" data-id="907:418">
                  <div className="text info-value" data-id="907:419">78h</div>
                  <div className="text info-label" data-id="907:420">TOTAL WORK</div>
                </div>
                <div className="info-col" data-id="907:421">
                  <div className="text info-value" data-id="907:422">6</div>
                  <div className="text info-label" data-id="907:423">UPCOMING</div>
                </div>
                <div className="info-col" data-id="907:424">
                  <div className="text info-value" data-id="907:425">12</div>
                  <div className="text info-label" data-id="907:426">COMPLETED</div>
                </div>
              </div>
            </section>

            <div className="list-row" data-id="907:427" role="button" tabIndex={0} aria-label="Fill Out Tax Form">
              <div className="row-icon" data-id="907:428">
                <img className="icon-bg" alt="" src="/assets/figmaimages/figma_image_907_430.png" />
                <img className="icon-foreground" alt="" src="/assets/figmaimages/figma_image_907_431.png" />
                <img className="icon-foreground-glyph" alt="" src="/assets/figmaimages/figma_image_907_431_517_11301.png" />
              </div>
              <div className="row-info" data-id="907:432">
                <div className="text row-title" data-id="907:433">Fil Out Tax Form</div>
                <div className="text row-subtitle" data-id="907:434">Fill out tax form and sign it to get verified</div>
              </div>
              <div className="row-chevron" data-id="907:435" aria-hidden="true">
                <img className="chev" alt="" src="/assets/figmaimages/figma_image_907_435_517_11393.png" />
              </div>
            </div>
          </section>

          <div className="list-row tall" data-id="907:436" role="button" tabIndex={0} aria-label="My Balance">
            <div className="row-left" data-id="907:437">
              <img className="icon outline" alt="" src="/assets/figmaimages/figma_image_907_438.png" />
              <img className="icon outline-glyph" alt="" src="/assets/figmaimages/figma_image_907_438_517_10841.png" />
              <div className="text row-left-title" data-id="907:439">My Balance</div>
            </div>
            <div className="row-right" data-id="907:440">
              <div className="text row-right-value" data-id="907:441">$1,560</div>
              <div className="row-chevron small" data-id="907:442" aria-hidden="true"></div>
            </div>
          </div>

          <div className="list-row tall" data-id="907:443" role="button" tabIndex={0} aria-label="Documents">
            <div className="row-left" data-id="907:444">
              <img className="icon outline" alt="" src="/assets/figmaimages/figma_image_907_445.png" />
              <img className="icon outline-glyph" alt="" src="/assets/figmaimages/figma_image_907_445_517_11095.png" />
              <div className="text row-left-title" data-id="907:446">Documents</div>
            </div>
            <div className="row-chevron small" data-id="907:447" aria-hidden="true"></div>
          </div>

          <div className="list-row tall" data-id="907:448" role="button" tabIndex={0} aria-label="Settings">
            <div className="row-left" data-id="907:449">
              <img className="icon outline" alt="" src="/assets/figmaimages/figma_image_907_450.png" />
              <img className="icon outline-glyph" alt="" src="/assets/figmaimages/figma_image_907_450_517_10923.png" />
              <div className="text row-left-title" data-id="907:451">Settings</div>
            </div>
            <div className="row-chevron small" data-id="907:452" aria-hidden="true"></div>
          </div>

          <div className="list-row tall" data-id="907:453" role="button" tabIndex={0} aria-label="Security & Privacy">
            <div className="row-left" data-id="907:454">
              <img className="icon outline" alt="" src="/assets/figmaimages/figma_image_907_455.png" />
              <img className="icon outline-glyph" alt="" src="/assets/figmaimages/figma_image_907_455_517_10863.png" />
              <div className="text row-left-title" data-id="907:456">Security & Privacy</div>
            </div>
            <div className="row-chevron small" data-id="907:457" aria-hidden="true"></div>
          </div>

          <div className="list-row tall" data-id="907:458" role="button" tabIndex={0} aria-label="About">
            <div className="row-left" data-id="907:459">
              <img className="icon outline" alt="" src="/assets/figmaimages/figma_image_907_460.png" />
              <div className="text row-left-title" data-id="907:461">About</div>
            </div>
            <div className="row-chevron small" data-id="907:462" aria-hidden="true"></div>
          </div>

          <div className="list-row tall" data-id="907:463" role="button" tabIndex={0} aria-label="Logout">
            <div className="row-left" data-id="907:464">
              <img className="icon outline" alt="" src="/assets/figmaimages/figma_image_907_465.png" />
              <div className="text row-left-title" data-id="907:466">Logout</div>
            </div>
          </div>
        </section>

        <section className="down-bar" data-id="907:467" role="navigation" aria-label="Bottom bar">
          <div className="bottom" data-id="I907:467;503:8263">
            <div className="bottom-item" data-id="I907:467;503:8264" tabIndex={0} role="button" aria-label="Jobs">
              <img className="icon bottom-icon" alt="" src="/assets/figmaimages/figma_image_907_467_503_8266.png" />
              <img className="icon bottom-icon-glyph" alt="" src="/assets/figmaimages/figma_image_907_467_503_8266_517_11097.png" />
              <div className="text bottom-label" data-id="I907:467;503:8267">Jobs</div>
            </div>
            <div className="bottom-item" data-id="I907:467;503:8268" tabIndex={0} role="button" aria-label="History">
              <img className="icon bottom-icon" alt="" src="/assets/figmaimages/figma_image_907_467_503_8270.png" />
              <div className="text bottom-label" data-id="I907:467;503:8271">History</div>
            </div>
            <div className="bottom-item" data-id="I907:467;503:8272" tabIndex={0} role="button" aria-label="Payments">
              <div className="icon bottom-icon" aria-hidden="true"></div>
              <div className="text bottom-label" data-id="I907:467;503:8275">Payments</div>
            </div>
            <div className="bottom-item active" data-id="I907:467;503:8276" tabIndex={0} aria-current="page" aria-label="Profile">
              <div className="icon bottom-icon" aria-hidden="true"></div>
              <div className="text bottom-label active" data-id="I907:467;503:8279">Profile</div>
            </div>
          </div>
          <div className="home-indicator" data-id="I907:467;503:8306">
            <div className="home-line" data-id="I907:467;503:8307"></div>
          </div>
        </section>
      </main>
    </div>
  );
}
