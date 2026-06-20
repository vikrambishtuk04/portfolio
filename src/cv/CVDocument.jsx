import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from '@react-pdf/renderer'
import {
  personalInfo,
  experience,
  skills,
  projects,
  education,
  achievements,
  certifications,
} from '../data/portfolioData'

const colors = {
  primary: '#0891b2',
  primaryDark: '#0e7490',
  accent: '#059669',
  dark: '#0f172a',
  text: '#334155',
  muted: '#64748b',
  light: '#f1f5f9',
  border: '#e2e8f0',
}

const styles = StyleSheet.create({
  page: {
    paddingTop: 28,
    paddingBottom: 44,
    paddingHorizontal: 36,
    fontFamily: 'Helvetica',
    fontSize: 9,
    color: colors.text,
    lineHeight: 1.45,
  },
  header: {
    backgroundColor: colors.dark,
    marginHorizontal: -36,
    marginTop: -28,
    paddingHorizontal: 36,
    paddingTop: 22,
    paddingBottom: 18,
    marginBottom: 14,
    borderTopWidth: 4,
    borderTopColor: colors.primary,
  },
  name: {
    fontSize: 22,
    fontFamily: 'Helvetica-Bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  title: {
    fontSize: 11,
    color: '#67e8f9',
    fontFamily: 'Helvetica-Bold',
    marginBottom: 10,
  },
  contactLine: {
    fontSize: 8.5,
    color: '#cbd5e1',
  },
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: colors.primaryDark,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 5,
    paddingBottom: 3,
    borderBottomWidth: 1.5,
    borderBottomColor: colors.primary,
  },
  summary: {
    fontSize: 9,
    color: colors.text,
    textAlign: 'justify',
  },
  jobBlock: {
    marginBottom: 8,
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  jobLeft: {
    width: '72%',
  },
  jobRight: {
    width: '28%',
    textAlign: 'right',
  },
  jobRole: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: colors.dark,
    marginBottom: 2,
  },
  jobCompany: {
    fontSize: 9,
    color: colors.primary,
    fontFamily: 'Helvetica-Bold',
  },
  jobPeriod: {
    fontSize: 8,
    color: colors.muted,
  },
  techRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 3,
  },
  techTag: {
    fontSize: 7,
    backgroundColor: colors.light,
    color: colors.primaryDark,
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 4,
    marginBottom: 3,
  },
  bulletRow: {
    flexDirection: 'row',
    marginBottom: 2,
    paddingRight: 6,
  },
  bulletMark: {
    width: 8,
    fontSize: 9,
    color: colors.accent,
  },
  bulletText: {
    width: '94%',
    fontSize: 8.5,
    color: colors.text,
  },
  skillBlock: {
    marginBottom: 5,
  },
  skillTitle: {
    fontSize: 8.5,
    fontFamily: 'Helvetica-Bold',
    color: colors.dark,
    marginBottom: 1,
  },
  skillText: {
    fontSize: 8,
    color: colors.muted,
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  colLeft: {
    width: '48%',
  },
  colRight: {
    width: '48%',
  },
  projectBlock: {
    marginBottom: 6,
  },
  projectTitle: {
    fontSize: 9.5,
    fontFamily: 'Helvetica-Bold',
    color: colors.dark,
    marginBottom: 2,
  },
  projectDesc: {
    fontSize: 8,
    color: colors.text,
    marginBottom: 2,
  },
  eduBlock: {
    marginBottom: 5,
  },
  eduDegree: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: colors.dark,
    marginBottom: 1,
  },
  eduDetail: {
    fontSize: 8,
    color: colors.muted,
    marginBottom: 1,
  },
  achievementItem: {
    marginBottom: 4,
  },
  achievementTitle: {
    fontSize: 8.5,
    fontFamily: 'Helvetica-Bold',
    color: colors.dark,
    marginBottom: 1,
  },
  achievementDesc: {
    fontSize: 8,
    color: colors.muted,
  },
  certItem: {
    fontSize: 8,
    color: colors.text,
    marginBottom: 2,
  },
  footer: {
    position: 'absolute',
    bottom: 16,
    left: 36,
    right: 36,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 0.5,
    borderTopColor: colors.border,
    paddingTop: 5,
  },
  footerText: {
    fontSize: 7,
    color: colors.muted,
  },
})

function BulletList({ items, limit }) {
  const list = limit ? items.slice(0, limit) : items
  return (
    <View>
      {list.map((item, i) => (
        <View key={i} style={styles.bulletRow}>
          <Text style={styles.bulletMark}>-</Text>
          <Text style={styles.bulletText}>{item}</Text>
        </View>
      ))}
    </View>
  )
}

function TechTags({ items }) {
  return (
    <View style={styles.techRow}>
      {items.map((t) => (
        <Text key={t} style={styles.techTag}>{t}</Text>
      ))}
    </View>
  )
}

function SkillsList({ items }) {
  return (
    <View>
      {items.map((group) => (
        <View key={group.category} style={styles.skillBlock}>
          <Text style={styles.skillTitle}>{group.category}</Text>
          <Text style={styles.skillText}>{group.items.join(', ')}</Text>
        </View>
      ))}
    </View>
  )
}

function SectionTitle({ children }) {
  return <Text style={styles.sectionTitle}>{children}</Text>
}

function PageFooter() {
  return (
    <View style={styles.footer} fixed>
      <Text style={styles.footerText}>{personalInfo.name} — Curriculum Vitae</Text>
      <Text
        style={styles.footerText}
        render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`}
      />
    </View>
  )
}

export default function CVDocument() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)
  const skillsMid = Math.ceil(skills.length / 2)

  return (
    <Document
      title={`${personalInfo.name} - CV`}
      author={personalInfo.name}
      subject="Professional Resume"
    >
      {/* Page 1: Header, Summary, Experience, Skills */}
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{personalInfo.name}</Text>
          <Text style={styles.title}>
            {personalInfo.title} | {personalInfo.subtitle}
          </Text>
          <Text style={styles.contactLine}>
            {personalInfo.email}  |  {personalInfo.phone}  |  {personalInfo.location}
          </Text>
        </View>

        <View style={styles.section}>
          <SectionTitle>Professional Summary</SectionTitle>
          <Text style={styles.summary}>{personalInfo.objective}</Text>
        </View>

        <View style={styles.section}>
          <SectionTitle>Professional Experience</SectionTitle>
          {experience.map((job) => (
            <View key={job.company} style={styles.jobBlock}>
              <View style={styles.jobHeader}>
                <View style={styles.jobLeft}>
                  <Text style={styles.jobRole}>{job.role}</Text>
                  <Text style={styles.jobCompany}>{job.company}</Text>
                </View>
                <View style={styles.jobRight}>
                  <Text style={styles.jobPeriod}>{job.period}</Text>
                </View>
              </View>
              <TechTags items={job.tech} />
              <BulletList
                items={job.highlights}
                limit={job.company.includes('Ginni') ? 6 : 3}
              />
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <SectionTitle>Technical Skills</SectionTitle>
          <View style={styles.row2}>
            <View style={styles.colLeft}>
              <SkillsList items={skills.slice(0, skillsMid)} />
            </View>
            <View style={styles.colRight}>
              <SkillsList items={skills.slice(skillsMid)} />
            </View>
          </View>
        </View>

        <PageFooter />
      </Page>

      {/* Page 2+: Projects, Education, Achievements, Certifications — continuous flow, no blank gaps */}
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.section}>
          <SectionTitle>Key Projects</SectionTitle>
          {featuredProjects.map((project) => (
            <View key={project.title} style={styles.projectBlock}>
              <Text style={styles.projectTitle}>{project.title}</Text>
              <Text style={styles.projectDesc}>{project.description}</Text>
              <TechTags items={project.tech} />
              <BulletList items={project.responsibilities} limit={2} />
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <SectionTitle>Other Projects</SectionTitle>
          {otherProjects.map((project) => (
            <View
              key={project.title}
              style={styles.projectBlock}
              break={project.title === 'E-Invoice & E-Way Bill Software'}
            >
              <Text style={styles.projectTitle}>{project.title}</Text>
              <Text style={styles.projectDesc}>{project.description}</Text>
              <TechTags items={project.tech} />
              <BulletList items={project.responsibilities} limit={2} />
            </View>
          ))}
        </View>

        <View style={styles.row2}>
          <View style={[styles.section, styles.colLeft]}>
            <SectionTitle>Education</SectionTitle>
            {education.map((edu) => (
              <View key={edu.degree} style={styles.eduBlock}>
                <Text style={styles.eduDegree}>{edu.degree}</Text>
                <Text style={styles.eduDetail}>{edu.institution}</Text>
                <Text style={styles.eduDetail}>{edu.year} | Score: {edu.score}</Text>
              </View>
            ))}
          </View>

          <View style={[styles.section, styles.colRight]}>
            <SectionTitle>Achievements</SectionTitle>
            {achievements.map((item) => (
              <View key={item.title} style={styles.achievementItem}>
                <Text style={styles.achievementTitle}>{item.title}</Text>
                <Text style={styles.achievementDesc}>{item.description}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <SectionTitle>Certifications</SectionTitle>
          {certifications.map((cert) => (
            <Text key={cert.name} style={styles.certItem}>
              - {cert.name} ({cert.issuer})
            </Text>
          ))}
        </View>

        <PageFooter />
      </Page>
    </Document>
  )
}
