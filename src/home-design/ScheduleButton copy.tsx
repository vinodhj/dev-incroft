import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Schedule } from '@mui/icons-material';

const ScheduleButton: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  // Your Google Calendar URL
  const calendarUrl: string =
    'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2SEQk2tJ4LgjMyiAqfY5MZD5pgeKuzOlsy4HFhIl69kiML99p87mjzUpeBJvHLWHN7u8uGGn71?gv=true';

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <>
      {/* Your Material-UI Button */}
      <Button
        variant="text"
        size="large"
        startIcon={<Schedule />}
        onClick={() => setShowModal(true)}
        sx={{
          color: 'white',
          textTransform: 'none',
          px: 4,
          py: 1.5,
          fontSize: '1rem',
          borderRadius: 2,
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.1)',
          },
        }}
      >
        Schedule a call
      </Button>

      {/* Modal Popup */}
      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
          }}
          onClick={handleBackdropClick}
        >
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              maxWidth: '1024px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'hidden',
            }}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '24px',
                borderBottom: '1px solid #e5e7eb',
              }}
            >
              <h2
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  margin: 0,
                }}
              >
                Schedule a Call
              </h2>
              <button
                onClick={handleCloseModal}
                style={{
                  padding: '8px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f3f4f6')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Calendar iframe */}
            <div style={{ padding: '24px' }}>
              <iframe
                src={calendarUrl}
                style={{
                  width: '100%',
                  height: '600px',
                  border: 'none',
                  borderRadius: '8px',
                }}
                title="Google Calendar Scheduling"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ScheduleButton;
