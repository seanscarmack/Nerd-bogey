import { StyleSheet } from 'react-native';
import { sharedPageStyles, PAGE_COLORS } from './sharedPage.styles';

export const fineTuneStyles = StyleSheet.create({
  contentContainer: {
    ...sharedPageStyles.contentContainer,
    paddingBottom: 24,
  },

  keyboardAvoidingView: {
    flex: 1,
  },

  bottomSafeSpacer: {
    height: 24,
  },

  card: {
    ...sharedPageStyles.panelCard,
    backgroundColor: 'rgba(10,18,38,0.85)',
    borderRadius: 22,
    paddingVertical: 20,
    paddingHorizontal: 18,
    marginBottom: 20,
    borderColor: 'rgba(255,255,255,0.05)',
  },

  modeSection: {
    marginBottom: 20,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 16,
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },

  infoBlock: {
    flex: 1,
  },

  label: {
    fontSize: 12,
    color: 'rgba(200,220,255,0.5)',
    marginBottom: 4,
  },

  value: {
    fontSize: 16,
    color: '#FFFFFF',
  },

  countRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },

  countItem: {
    flex: 1,
    alignItems: 'center',
  },

  countValue: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 2,
  },

  countValueWoods: {
    color: '#4AD6FF',
  },

  countValueHybrids: {
    color: '#79E2A4',
  },

  countValueIrons: {
    color: '#F3D36A',
  },

  countValueWedges: {
    color: '#FF7B7B',
  },

  countLabel: {
    fontSize: 12,
    color: 'rgba(200,220,255,0.5)',
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 16,
  },

  sectionTitleCentered: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 16,
    textAlign: 'center',
  },

  optionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: PAGE_COLORS.cyan,
    marginBottom: 6,
    textAlign: 'center',
  },

  optionText: {
    fontSize: 13,
    color: 'rgba(220,230,255,0.65)',
    lineHeight: 18,
    textAlign: 'center',
  },

  optionTextCentered: {
    fontSize: 13,
    color: 'rgba(220,230,255,0.65)',
    lineHeight: 18,
    textAlign: 'center',
    marginBottom: 6,
    marginTop: 0,

  },

  optionCard: {
    ...sharedPageStyles.softPanelCard,
    backgroundColor: 'rgba(12,20,44,0.9)',
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginTop: 12,
    borderColor: 'rgba(255,255,255,0.06)',
  },

  optionCardActive: {
    borderColor: '#4ADEFF',
    backgroundColor: 'rgba(74, 214, 255, 0.08)',
  },

  modeSelectorWrap: {
    gap: 14,
  },

  modeSelectorInlineWrap: {
    flexDirection: 'row',
    gap: 12,
  },

  modeOptionPlain: {
    flex: 1,
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(12,20,44,0.9)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },

  modeOptionPlainActive: {
    backgroundColor: 'rgba(74, 214, 255, 0.08)',
    borderColor: '#4ADEFF',
  },

  compactClubRow: {
    borderRadius: 16,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 8,
    backgroundColor: 'rgba(12,20,44,0.9)',
  },

  compactClubRowWoods: {
    borderColor: 'rgba(74,214,255,0.30)',
    backgroundColor: 'rgba(74,214,255,0.08)',
  },

  compactClubRowHybrids: {
    borderColor: 'rgba(121,226,164,0.30)',
    backgroundColor: 'rgba(121,226,164,0.08)',
  },

  compactClubRowIrons: {
    borderColor: 'rgba(243,211,106,0.30)',
    backgroundColor: 'rgba(243,211,106,0.08)',
  },

  compactClubRowWedges: {
    borderColor: 'rgba(255,123,123,0.30)',
    backgroundColor: 'rgba(255,123,123,0.08)',
  },

  compactTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
    gap: 10,
  },

  compactClubName: {
    flex: 1,
    fontSize: 14,
    fontWeight: '800',
    color: '#FFFFFF',
  },

  compactSwingweightValueInline: {
    minWidth: 34,
    textAlign: 'right',
    fontSize: 15,
    fontWeight: '900',
  },

  compactControlRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  compactEdgeLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: 'rgba(220,230,255,0.55)',
  },

  compactAdjustButton: {
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(74,214,255,0.14)',
    borderWidth: 1,
    borderColor: 'rgba(74,214,255,0.26)',
  },

  compactAdjustButtonText: {
    color: '#4ADEFF',
    fontSize: 16,
    fontWeight: '900',
    lineHeight: 18,
    marginTop: -1,
  },

  compactSliderWrap: {
    flex: 1,
    justifyContent: 'center',
  },

  compactSliderGlass: {
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.10)',
    shadowColor: '#FFFFFF',
    shadowOpacity: 0.04,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
  },

  compactSlider: {
    width: '100%',
    height: 22,
  },

  basicInputsWrap: {
    marginTop: 0,
  },

  basicTipText: {
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 18,
    color: 'rgba(220,230,255,0.58)',
    textAlign: 'center',
    marginTop: 2,
    marginBottom: 10,
  },

  basicClubCard: {
    borderRadius: 16,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 10,
  },

  basicClubCardComplete: {
    borderColor: 'rgba(121,226,164,0.95)',
    shadowColor: '#79E2A4',
    shadowOpacity: 0.18,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
  },

  basicClubCardError: {
    borderColor: 'rgba(255,123,123,0.60)',
  },

  basicClubHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },

  basicClubHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1,
  },

  basicHeaderRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 6,
    flexShrink: 0,
  },

  basicCompletionBubble: {
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.14)',
  },

  basicCompletionBubbleComplete: {
    backgroundColor: 'rgba(121,226,164,0.18)',
    borderColor: 'rgba(121,226,164,0.88)',
  },

  basicCompletionBubbleError: {
    backgroundColor: 'rgba(255,123,123,0.14)',
    borderColor: 'rgba(255,123,123,0.50)',
  },

  basicCompletionBubbleText: {
    fontSize: 12,
    fontWeight: '900',
    color: 'rgba(220,230,255,0.62)',
    lineHeight: 13,
  },

  basicCompletionBubbleTextComplete: {
    color: '#79E2A4',
  },

  basicCompletionBubbleTextError: {
    color: '#FF7B7B',
  },

  basicClubNameCollapsed: {
    flex: 1,
    fontSize: 14,
    fontWeight: '800',
    color: '#FFFFFF',
  },

  basicEstimatedSwingweightText: {
    minWidth: 40,
    textAlign: 'right',
    marginRight: 2,
  },

  basicChevron: {
    width: 16,
    textAlign: 'right',
    fontSize: 15,
    fontWeight: '900',
    color: 'rgba(220,230,255,0.72)',
    lineHeight: 16,
  },

  basicIssueChip: {
    borderRadius: 999,
    paddingVertical: 3,
    paddingHorizontal: 8,
    backgroundColor: 'rgba(255,123,123,0.14)',
    borderWidth: 1,
    borderColor: 'rgba(255,123,123,0.35)',
    marginRight: 2,
  },

  basicIssueChipText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#FFB3B3',
  },

  basicExpandedBody: {
    marginTop: 12,
  },

  basicInputRow: {
    flexDirection: 'row',
    gap: 10,
  },

  basicInputGroup: {
    flex: 1,
  },

  basicInputLabel: {
    fontSize: 11,
    fontWeight: '800',
    color: 'rgba(220,230,255,0.62)',
    textAlign: 'center',
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  basicInput: {
    height: 42,
    borderRadius: 12,
    paddingHorizontal: 10,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '800',
    color: '#FFFFFF',
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.10)',
  },

  bpInlineControl: {
    height: 42,
    borderRadius: 12,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.10)',
  },

  bpInlineButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(74,214,255,0.14)',
    borderWidth: 1,
    borderColor: 'rgba(74,214,255,0.26)',
  },

  bpInlineButtonText: {
    color: '#4ADEFF',
    fontSize: 18,
    fontWeight: '900',
    lineHeight: 20,
    marginTop: -1,
  },

  bpInlineValueWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },

  bpInlineValue: {
    fontSize: 18,
    fontWeight: '900',
    color: '#FFFFFF',
    textAlign: 'center',
  },

  saveButton: {
    marginTop: 22,
    height: 64,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(243, 211, 106, 0.14)',
    borderWidth: 1,
    borderColor: 'rgba(243, 211, 106, 0.38)',
  },

  saveButtonText: {
    fontSize: 19,
    fontWeight: '900',
    color: '#F7DE8A',
  },

  saveButtonSubtext: {
    marginTop: 2,
    fontSize: 12,
    fontWeight: '800',
    color: 'rgba(247,222,138,0.82)',
  },
});