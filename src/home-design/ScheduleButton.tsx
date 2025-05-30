import React, { useEffect, useState } from 'react';
import { Button, type SxProps, type Theme } from '@mui/material';
import { Schedule } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { red } from '@mui/material/colors';

interface ScheduleButtonProps {
  sx?: SxProps<Theme>;
  children?: React.ReactNode;
  variant?: 'text' | 'outlined' | 'contained';
  size?: 'small' | 'medium' | 'large';
  startIcon?: React.ReactNode;
}

const ScheduleButton: React.FC<ScheduleButtonProps> = ({
  sx,
  children = 'Schedule a call',
  variant = 'text',
  size = 'large',
  startIcon = <Schedule />,
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Clean up when unmounting
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showModal]);

  // Default styles that can be overridden
  const defaultSx: SxProps<Theme> = {
    color: 'white',
    textTransform: 'none',
    px: 4,
    py: 1.5,
    fontSize: '1rem',
    borderRadius: 2,
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.1)',
    },
    ...sx, // Merge with custom sx props
  };
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
      <Button variant={variant} size={size} startIcon={startIcon} onClick={() => setShowModal(true)} sx={defaultSx}>
        {children}
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
            overflow: 'hidden',
          }}
          onClick={handleBackdropClick}
        >
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              maxWidth: '1200px', // Increased from 1024px
              width: '95%', // Increased from 100% for better mobile experience
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
                padding: '15px',
                paddingBottom: 0,
                borderBottom: '1px solid #e5e7eb',
              }}
            >
              <h2
                style={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  margin: 0,
                }}
              >
                Schedule a Meeting - Let's discuss how our expertise can drive your business forward
              </h2>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent bubbling to modal container
                  handleCloseModal();
                }}
                aria-label="Close modal"
                title="Close modal"
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
                <CloseIcon style={{ color: red[400], fontSize: '1.5rem' }} />
              </button>
            </div>

            {/* Calendar iframe */}
            <div style={{ padding: '24px' }}>
              <iframe
                src={calendarUrl}
                style={{
                  width: '100%',
                  height: '650px', // Increased from 600px
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
